import { Box, Button, Center, Flex, Loader, Text } from '@mantine/core'
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { BookContents } from './BookContents';

type Props = {
  id: string | string[],
  name: string | string[],
}

export const Contents = ({ id, name }: Props) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [bookData, setBookData] = useState<TBookData["Items"] | null>(null);
  const applicationId = process.env.NEXT_PUBLIC_APPLICATION_ID;
  const booksGenreId = id; // ジャンル
  const getBooksCount = 10 // 取得件数
  const searchUrl1 = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&booksGenreId=${booksGenreId}&hits=${getBooksCount}&page=1&sort=sales&applicationId=${applicationId}`;
  let json: TBookData | null;
  let json2: TBookData | null;

  // 初期表示
  useEffect(() => {
    (async () => {
      const response = await fetch(searchUrl1);
      try {
        if (response.ok) { // 4xx系, 5xx系エラーでない場合
          json = await response.json();
          let pageCount = json && 1 + Math.floor(Math.random() * json.pageCount) // 表示するページ数をランダムに取得
          await fetchRandomData(booksGenreId, getBooksCount, applicationId, pageCount)
        } else { // 4xx系, 5xx系エラーの場合
          errorHandle();
        }
      } catch {
        errorHandle();
      }
    })();
  }, [])

  // pageCountの書籍データを10件取得
  const fetchRandomData = useCallback((booksGenreId: string | string[], getBooksCount: number, applicationId: string | undefined, pageCount: number | null) => {
    const searchUrl2 = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&booksGenreId=${booksGenreId}&hits=${getBooksCount}&page=${pageCount}&sort=sales&applicationId=${applicationId}`;
    setTimeout(async () => { // 429エラー回避のため、１秒後に設定
      const response2 = await fetch(searchUrl2);
      try {
        if (response2.ok) {
          json2 = await response2.json();
          const data: TBookData["Items"] | null = json2 && json2.Items;
          setBookData(data)
          setLoading(false);
        } else {
          errorHandle();
        }
      } catch {
        errorHandle();
      }
    }, 1000);
  }, [])

  // 他の10件をランダム取得
  const fetchOtherData = useCallback(() => {
    setLoading(true)
    let pageCount = json && 1 + Math.floor(Math.random() * json.pageCount) // 表示するページ数をランダムに取得
    fetchRandomData(booksGenreId, getBooksCount, applicationId, pageCount)
  }, [])

  // エラー時にそれぞれの値をsetする
  const errorHandle = useCallback(() => {
    setBookData(null)
    setLoading(false);
  },[])

  return (
    <>
      <Box>
        <Text mt="md">「{name}」：</Text>
        {loading
          ? <Center mt="lg"><Loader /></Center>
          : bookData
            ? bookData.map((data, index) => (
              <BookContents key={data.Item.isbn} data={data} index={index} />
            )) : "おすすめが見つかりませんでした。条件を変えて再度お試しください。"
        }
      </Box>
      <Flex mt={50} gap="lg" justify="center">
        <Button w={200} size="sm" component={Link} href="/" variant="outline">TOPへ戻る</Button>
        <Button w={200} size="sm" onClick={fetchOtherData} disabled={!bookData || loading}>他のおすすめを探す</Button>
      </Flex>
    </>
  )
}