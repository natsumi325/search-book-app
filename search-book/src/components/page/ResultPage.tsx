import { Text, Title } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import { BasicLayout } from '../organisms/BasicLayout'
import { CategoryResult } from '../organisms/CategoryResult'
import { WordResult } from '../organisms/WordResult'

export const ResultPage = () => {
  const router = useRouter();
  const searchContents = () => {
    if (router.query.booksGenreId && router.query.booksGenreName) {
      // カテゴリー検索結果
      return <CategoryResult id={router.query.booksGenreId} name={router.query.booksGenreName} />
    } else if (router.query.booksSearchWord) {
      // フリーワード検索結果
      return <WordResult word={router.query.booksSearchWord} />
    } else {
      return <Text>検索条件が見つかりませんでした。別の条件で検索してください。</Text>
    }
  }
  return (
    <BasicLayout>
      <Title size={24}>おすすめの本をさがす</Title>
      {searchContents()}
    </BasicLayout>
  )
}
