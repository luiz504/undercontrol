import { ComponentProps, ElementRef, forwardRef } from 'react'
import { View } from 'react-native'

import { cn } from '@gluestack-ui/nativewind-utils/cn'

type Props = ComponentProps<typeof View> & { className?: string }

export const Center = forwardRef<ElementRef<typeof View>, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <View
        className={cn('items-center justify-center', className)}
        {...rest}
        ref={ref}
      />
    )
  },
)

Center.displayName = 'Center'
