import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { VariantProps } from '@gluestack-ui/nativewind-utils'
import { View } from 'react-native'

import { hstackStyle } from './styles'

type Props = ComponentProps<typeof View> & VariantProps<typeof hstackStyle>

const HStack = forwardRef<ElementRef<typeof View>, Props>(
  ({ className, space, reversed, ...props }, ref) => {
    return (
      <View
        className={hstackStyle({ space, reversed, class: className })}
        {...props}
        ref={ref}
      />
    )
  },
)

HStack.displayName = 'HStack'

export { HStack }
