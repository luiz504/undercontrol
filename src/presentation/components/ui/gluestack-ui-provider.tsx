import { FC, PropsWithChildren } from 'react'
import { ToastProvider } from '@gluestack-ui/toast'
import { OverlayProvider } from '@gluestack-ui/overlay'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'react-native'

export const GluestackUIProvider: FC<PropsWithChildren> = ({ children }) => {
  const { top } = useSafeAreaInsets()
  return (
    <View className="flex-1 bg-black">
      <View className="flex-1 bg-black" style={{ marginTop: top }}>
        <OverlayProvider>
          <ToastProvider>{children}</ToastProvider>
        </OverlayProvider>
      </View>
    </View>
  )
}
