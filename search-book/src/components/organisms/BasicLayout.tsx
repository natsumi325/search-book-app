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
      <Box sx={(theme) => ({
        maxWidth: '1200px',
        margin: "auto",
      })}>
        {children}
      </Box>
    </>
  )
}
