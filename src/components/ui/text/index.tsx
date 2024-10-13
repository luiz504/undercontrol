import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Text as RNText } from 'react-native'
import type { VariantProps } from '@gluestack-ui/nativewind-utils'
import { textStyle } from './styles'

type Props = ComponentProps<typeof RNText> & VariantProps<typeof textStyle>

export const Text = forwardRef<ElementRef<typeof RNText>, Props>(
  ({ className, ...rest }, ref) => {
    return <RNText className={textStyle({ className })} {...rest} ref={ref} />
  },
)

Text.displayName = 'Text'
