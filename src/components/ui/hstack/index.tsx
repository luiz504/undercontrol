import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { VariantProps } from '@gluestack-ui/nativewind-utils'
import { View } from 'react-native'

import { hstackStyle } from './styles'

type Props = ComponentProps<typeof View> & VariantProps<typeof hstackStyle>

export const HStack = forwardRef<ElementRef<typeof View>, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <View className={hstackStyle({ class: className })} {...rest} ref={ref} />
    )
  },
)

HStack.displayName = 'HStack'
