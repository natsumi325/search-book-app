import { Flex, Text, Anchor, Image, Box, Divider } from '@mantine/core'
import React from 'react'

type Props = {
  data: TBookItemData,
  index: number,
}

export const BookContents = ({ data, index }: Props) => {
  return (
    <Flex mt={40} gap="md">
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
  )
}
