import { QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'
import { queryClient } from './query-client'

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
