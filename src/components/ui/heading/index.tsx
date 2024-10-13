import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { Text } from 'react-native'
import type { VariantProps } from '@gluestack-ui/nativewind-utils'

import { headingStyle } from './styles'

type Props = VariantProps<typeof headingStyle> & ComponentProps<typeof Text>
export const Heading = forwardRef<ElementRef<typeof Text>, Props>(
  ({ children, className, ...rest }, ref) => {
    return (
      <Text
        ref={ref}
        className={headingStyle({
          className,
        })}
        {...rest}
      >
        {children}
      </Text>
    )
  },
)

Heading.displayName = 'Heading'
