import { Box, Button, Flex, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react'

export const SearchCategory = () => {
  // 受け渡すクエリパラメータ
  const links = [
    {
      "booksGenreId": "001004",
      "booksGenreName": "全て",
    },
    {
      "booksGenreId": "001004001",
      "booksGenreName": "ミステリー・サスペンス",
    },
    {
      "booksGenreId": "001004002",
      "booksGenreName": "SF・ホラー",
    },
    {
      "booksGenreId": "001004003",
      "booksGenreName": "エッセイ",
    },
    {
      "booksGenreId": "001004004",
      "booksGenreName": "ノンフィクション",
    },
    {
      "booksGenreId": "001004008",
      "booksGenreName": "日本の小説",
    },
    {
      "booksGenreId": "001004009",
      "booksGenreName": "外国の小説",
    },
    {
      "booksGenreId": "001004015",
      "booksGenreName": "その他",
    },
    {
      "booksGenreId": "001004016",
      "booksGenreName": "ロマンス",
    }
  ];
  return (
    <Box>
      <Flex
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
        mt='md'
      >
        {links.map((link) =>
          <Button key={link.booksGenreId} size="sm" component={Link} href={{ pathname: "result", query: link }}>{link.booksGenreName}</Button>
        )}
      </Flex>
    </Box>
  )
}
