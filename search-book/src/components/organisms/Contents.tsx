/* eslint-disable react/display-name */
import { Anchor, Box, Image, Text } from '@mantine/core'
import { memo, useEffect, useState } from 'react';

export const Contents = () => {
  const [bookData, setbookData] = useState<any>(null);
  useEffect(() => {
    (async () => {
      const applicationId = process.env.NEXT_PUBLIC_APPLICATION_ID;
      const booksGenreId = '001004'; // ジャンル -> 小説
      const searchText = 'エッセイ'; // 検索ワード
      const pageCount = 1;
      const searchUrl = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=${searchText}&booksGenreId=${booksGenreId}&hits=30&page=${pageCount}&applicationId=${applicationId}`;
      const response = await fetch(searchUrl);
      let json;
      try {
        if (response.ok) {
          json = await response.json();
          const data = json.Items;
          console.log(json, data);
          setbookData(data)
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [])
  return (
    <Box>
      {bookData && bookData.map((data) => (
        <Box key={data.Item.isbn} mt="40px">
          <Image
            width={175}
            height={250}
            radius="md"
            src={data.Item.largeImageUrl}
            alt="Random unsplash image"
          />
          <Text>タイトル：{data.Item.title}</Text>
          <Text>あらすじ：{data.Item.itemCaption}</Text>
          <Anchor href={data.Item.itemUrl} target="_blank">{data.Item.itemUrl}</Anchor>
        </Box>
      ))}
    </Box>
  )
}