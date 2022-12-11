import { Anchor, Box, Image, Text } from '@mantine/core'
import { useEffect, useState } from 'react';

type Props = {
  id: string | string[],
  name: string | string[],
}

export const Contents = ({ id, name }: Props) => {
  const [bookData, setBookData] = useState<TBookData["Items"] | null>(null);
  useEffect(() => {
    (async () => {
      const applicationId = process.env.NEXT_PUBLIC_APPLICATION_ID;
      const booksGenreId = id; // ジャンル
      const getBooksCount = 10 // 取得件数
      const searchUrl1 = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&booksGenreId=${booksGenreId}&hits=${getBooksCount}&page=1&sort=sales&applicationId=${applicationId}`;
      const response = await fetch(searchUrl1);
      let json;
      try {
        if (response.ok) {
          json = await response.json();
          const pageCount = 1 + Math.floor(Math.random() * json.pageCount) // 表示するページ数をランダムに取得
          console.log('json:', json, pageCount, json.pageCount);
          const searchUrl2 = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&booksGenreId=${booksGenreId}&hits=${getBooksCount}&page=${pageCount}&sort=sales&applicationId=${applicationId}`;
          setTimeout(async () => { // 429エラー回避のため
            const response2 = await fetch(searchUrl2);
            let json2 = await response2.json();
            const data: TBookData["Items"] = json2.Items;
            setBookData(data)
          }, 1000);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [])
  return (
    <Box>
      <Text mt="md">「{name}」の検索結果：</Text>
      {bookData && bookData.map((data) => (
        <Box key={data.Item.isbn} mt="40px">
          <Image
            width={175}
            height={250}
            radius="md"
            src={data.Item.largeImageUrl}
            alt={data.Item.title}
          />
          <Text>タイトル：{data.Item.title}</Text>
          <Text>あらすじ：{data.Item.itemCaption}</Text>
          <Anchor href={data.Item.itemUrl} target="_blank">{data.Item.itemUrl}</Anchor>
        </Box>
      ))}
    </Box>
  )
}