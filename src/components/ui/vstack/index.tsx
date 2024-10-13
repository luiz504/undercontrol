import { ComponentProps, ElementRef, forwardRef } from 'react'
import { View } from 'react-native'
import type { VariantProps } from '@gluestack-ui/nativewind-utils'

import { vstackStyle } from './styles'

type Props = ComponentProps<typeof View> & VariantProps<typeof vstackStyle>

const VStack = forwardRef<ElementRef<typeof View>, Props>(
  ({ className, space, reversed, ...props }, ref) => {
    return (
      <View
        className={vstackStyle({ space, reversed, class: className })}
        {...props}
        ref={ref}
      />
    )
  },
)

VStack.displayName = 'VStack'

export { VStack }
