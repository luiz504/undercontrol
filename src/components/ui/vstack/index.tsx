import { ComponentProps, ElementRef, forwardRef } from 'react'
import { View } from 'react-native'
import type { VariantProps } from '@gluestack-ui/nativewind-utils'

import { vstackStyle } from './styles'

type Props = ComponentProps<typeof View> & VariantProps<typeof vstackStyle>

export const VStack = forwardRef<ElementRef<typeof View>, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <View className={vstackStyle({ class: className })} {...rest} ref={ref} />
    )
  },
)

VStack.displayName = 'VStack'
