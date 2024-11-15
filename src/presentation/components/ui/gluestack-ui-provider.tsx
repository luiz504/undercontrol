import { FC, PropsWithChildren } from 'react'
import { ToastProvider } from '@gluestack-ui/toast'
import { OverlayProvider } from '@gluestack-ui/overlay'

export const GluestackUIProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <OverlayProvider>
      <ToastProvider>{children}</ToastProvider>
    </OverlayProvider>
  )
}
