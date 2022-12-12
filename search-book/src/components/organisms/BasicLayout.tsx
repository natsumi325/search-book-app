import { Box } from '@mantine/core'
import React, { ReactNode } from 'react'
import { BasicHeader } from './BasicHeader'

type Props = {
  children: ReactNode;
}

export const BasicLayout = ({ children }: Props) => {
  return (
    <>
      <BasicHeader />
      <Box sx={() => ({
        maxWidth: '1200px',
        margin: "5rem auto 0",
        padding: "2rem"
      })}>
        {children}
      </Box>
    </>
  )
}
