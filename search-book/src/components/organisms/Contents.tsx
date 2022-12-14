import { Anchor, Box, Button, Divider, Flex, Image, Text } from '@mantine/core'
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { scrollTop } from '../../utilities/scrollTop';

type Props = {
  id: string | string[],
  name: string | string[],
}

export const Contents = ({ id, name }: Props) => {
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
      json = await response.json();
      let pageCount = json && 1 + Math.floor(Math.random() * json.pageCount) // 表示するページ数をランダムに取得
      fetchRandomData(booksGenreId, getBooksCount, applicationId, pageCount)
    })();
  }, [])

  // pageCountの書籍データを10件取得
  const fetchRandomData = useCallback((booksGenreId: string | string[], getBooksCount: number, applicationId: string | undefined, pageCount: number | null) => {
    const searchUrl2 = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&booksGenreId=${booksGenreId}&hits=${getBooksCount}&page=${pageCount}&sort=sales&applicationId=${applicationId}`;
    setTimeout(async () => { // 429エラー回避のため
      const response2 = await fetch(searchUrl2);
      json2 = await response2.json();
      const data: TBookData["Items"] | null = json2 && json2.Items;
      setBookData(data)
    }, 1000);
  }, [])

  // 他の10件をランダム取得
  const fetchOtherData = useCallback(() => {
    let pageCount = json && 1 + Math.floor(Math.random() * json.pageCount) // 表示するページ数をランダムに取得
    fetchRandomData(booksGenreId, getBooksCount, applicationId, pageCount)
    scrollTop();
  }, [])

  return (
    <>
      <Box>
        <Text mt="md">「{name}」：</Text>
        {bookData && bookData.map((data, index) => (
          <Flex key={data.Item.isbn} mt={40} gap="md">
            <Text>{index + 1}.</Text>
            <Anchor href={data.Item.itemUrl} target="_blank" sx={() => ({
              transition: "opacity 0.3s ease-in",
              ":hover": { opacity: 0.7, transition: "opacity 0.3s ease-in", }
            })}>
              <Image
                width={175}
                height={250}
                radius="md"
                src={data.Item.largeImageUrl}
                alt={data.Item.title}
              />
            </Anchor>
            <Box w="100%">
              <Text size={20} fw={700}>{data.Item.title}</Text>
              <Text size={14}>{data.Item.author}</Text>
              <Divider my="sm" />
              <Text>{data.Item.itemCaption ? data.Item.itemCaption : "あらすじはありません"}</Text>
            </Box>
          </Flex>
        ))}
      </Box>
      <Flex mt={50} gap="lg" justify="center">
        <Button w={200} size="sm" component={Link} href="/" variant="outline">TOPへ戻る</Button>
        <Button w={200} size="sm" onClick={fetchOtherData}>他のおすすめを探す</Button>
      </Flex>
    </>
  )
}