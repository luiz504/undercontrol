import { ComponentProps, ElementRef, forwardRef } from 'react'
import { View } from 'react-native'

type Props = ComponentProps<typeof View>

export const VStack = forwardRef<ElementRef<typeof View>, Props>(
  ({ className, ...rest }, ref) => {
    return <View className={className} {...rest} ref={ref} />
  },
)

VStack.displayName = 'VStack'
