import { Button, Flex, TextInput } from '@mantine/core'
import { useRouter } from 'next/router';
import React, { useCallback, useRef } from 'react'

export const SearchWord = () => {
  const router = useRouter();
  const inputEl = useRef<HTMLInputElement>(null);

  const handleSearchWord = useCallback(async () => {
    if (inputEl.current?.value === "") {
      return;
    }
    router.push({
      pathname: "/result",
      query: {
        "booksSearchWord": inputEl.current?.value,
      }
    });
    inputEl.current!.value = "";
  }, [router, inputEl]);
  return (
    <Flex mt='md' gap="md" align="flex-end">
      <TextInput
        w="80%"
        placeholder="例：ファンタジー"
        ref={inputEl}
      />
      <Button onClick={handleSearchWord}>フリーワードで検索</Button>
    </Flex>
  )
}
