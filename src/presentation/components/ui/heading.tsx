import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { Text } from 'react-native'

import { tva } from '@gluestack-ui/nativewind-utils/tva'
import { VariantProps } from '@gluestack-ui/nativewind-utils'

const styles = tva({
  base: 'font-bold tracking-tight text-white',
  variants: {
    size: {
      sm: 'text-lg',
      md: 'text-xl',
      lg: 'text-2xl',
    },
  },
})
type Props = ComponentProps<typeof Text> & VariantProps<typeof styles>
export const Heading = forwardRef<ElementRef<typeof Text>, Props>(
  ({ children, size = 'lg', className, ...rest }, ref) => {
    return (
      <Text ref={ref} className={styles({ size, class: className })} {...rest}>
        {children}
      </Text>
    )
  },
)

Heading.displayName = 'Heading'
