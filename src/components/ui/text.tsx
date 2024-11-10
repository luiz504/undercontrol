import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Text as RNText } from 'react-native'

import { cn } from '@gluestack-ui/nativewind-utils/cn'

type Props = ComponentProps<typeof RNText>

export const Text = forwardRef<ElementRef<typeof RNText>, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <RNText
        className={cn('font-body text-base text-slate-50', className)}
        {...rest}
        ref={ref}
      />
    )
  },
)
Text.displayName = 'Text'
