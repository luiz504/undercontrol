import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { Text } from 'react-native'
import { cn } from '@gluestack-ui/nativewind-utils/cn'

type Props = ComponentProps<typeof Text>
export const Heading = forwardRef<ElementRef<typeof Text>, Props>(
  ({ children, className, ...rest }, ref) => {
    return (
      <Text
        ref={ref}
        className={cn(
          'text-2xl font-bold tracking-tight text-white',
          className,
        )}
        {...rest}
      >
        {children}
      </Text>
    )
  },
)

Heading.displayName = 'Heading'
