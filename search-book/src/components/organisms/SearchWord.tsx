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
    console.log(inputEl.current?.value);
    router.push({
      pathname: "/result",   //URL
      query: {
        "booksSearchWord": inputEl.current?.value,
      }
    });
    inputEl.current!.value = "";
  }, []);
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
