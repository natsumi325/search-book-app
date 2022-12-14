import { Text, Title } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import { BasicLayout } from '../organisms/BasicLayout'
import { Contents } from '../organisms/Contents'

export const ResultPage = () => {
  const router = useRouter();
  return (
    <BasicLayout>
      <Title size={24}>おすすめの本をさがす</Title>
      {router.query.booksGenreId && router.query.booksGenreName
        ? <Contents id={router.query.booksGenreId} name={router.query.booksGenreName} />
        : <Text>検索条件が見つかりませんでした。再度検索してください。</Text>
      }
    </BasicLayout>
  )
}
