import { BasicLayout } from '../organisms/BasicLayout'
import { Box, Button, Flex, Tabs, Text, Title } from '@mantine/core'
import Link from 'next/link'
import { IconPhoto, IconMessageCircle } from '@tabler/icons'

export const TopPage = () => {
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
    <>
      <BasicLayout>
        <Title size={24}>おすすめの本をさがす</Title>
        <Text mt="md">10冊ランダムに提案するよ。お気に入りの一冊を見つけてね</Text>
        <Tabs defaultValue="gallery" mt="2rem">
          <Tabs.List>
            <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />}>カテゴリから探す</Tabs.Tab>
            <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}>フリーワード検索</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" pt="xs">
            <Box>
              <Title size="h5" order={2}>小説</Title>
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
            {/* <Box mt="lg">
              <Title size="h5" order={2}>漫画</Title>
              <Flex
                gap="md"
                justify="flex-start"
                align="flex-start"
                direction="row"
                wrap="wrap"
                mt='md'
              >
                <Button size="sm" w={150} component={Link} href={{ pathname: "result", query: query }} as="result">{query.name}</Button>
              </Flex>
            </Box> */}

          </Tabs.Panel>

          <Tabs.Panel value="messages" pt="xs">
            <Box>
              <Text>fixme</Text>
            </Box>
          </Tabs.Panel>

        </Tabs>
      </BasicLayout>
    </>
  )
}
