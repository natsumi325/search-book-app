import { BasicLayout } from '../organisms/BasicLayout'
import { Box, Button, Flex, Tabs, Text, Title } from '@mantine/core'
import Link from 'next/link'
import { IconPhoto, IconMessageCircle } from '@tabler/icons'

export const TopPage = () => {
  const categoryName = "エッセイ"
  const categoryParam = "エッセイ";
  return (
    <>
      <BasicLayout>
        <Title size={24} mt="md">おすすめの本をさがす</Title>
        <Text mt={5}>10冊ランダムに提案するよ</Text>
        <Tabs defaultValue="gallery" mt="xl">
          <Tabs.List>
            <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />}>カテゴリから探す</Tabs.Tab>
            <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}>フリーワード検索</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" pt="xs">
            <Box>
              <Flex
                gap="md"
                justify="flex-start"
                align="flex-start"
                direction="row"
                wrap="wrap"
                mt='md'
              >
                <Button size="md" w={150} component={Link} href={`/result?category=${categoryParam}`}>{categoryName}</Button>
              </Flex>
            </Box>

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
