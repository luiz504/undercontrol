import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { View } from 'react-native'
import { cn } from '@gluestack-ui/nativewind-utils/cn'

type Props = ComponentProps<typeof View>

export const HStack = forwardRef<ElementRef<typeof View>, Props>(
  ({ className, ...rest }, ref) => {
    return <View className={cn('flex-row', className)} {...rest} ref={ref} />
  },
)

HStack.displayName = 'HStack'
