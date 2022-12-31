import { BasicLayout } from '../organisms/BasicLayout'
import { Tabs, Text, Title } from '@mantine/core'
import { IconPhoto, IconMessageCircle } from '@tabler/icons'
import { SearchCategory } from '../organisms/SearchCategory'
import { SearchWord } from '../organisms/SearchWord'

export const TopPage = () => {
  return (
    <>
      <BasicLayout>
        <Title size={24}>おすすめの小説をさがす</Title>
        <Text mt="md">10冊ランダムに提案するよ。お気に入りの一冊を見つけてね</Text>
        <Tabs defaultValue="gallery" mt="2rem">
          <Tabs.List>
            <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />}>カテゴリから探す</Tabs.Tab>
            <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}>フリーワード検索</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="gallery" pt="xs">
            <SearchCategory />
          </Tabs.Panel>
          <Tabs.Panel value="messages" pt="xs">
            <SearchWord />
          </Tabs.Panel>
        </Tabs>
      </BasicLayout>
    </>
  )
}
