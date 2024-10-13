import { FC, PropsWithChildren } from 'react'
import { ToastProvider } from '@gluestack-ui/toast'

export const GluestackUIProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>
}
