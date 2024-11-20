import { FC, PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { DevToolsBubble } from 'react-native-react-query-devtools'

import { queryClient } from './query-client'

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <DevToolsBubble />
    </QueryClientProvider>
  )
}
