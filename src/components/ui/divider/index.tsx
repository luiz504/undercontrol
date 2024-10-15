import { ComponentProps, ElementRef, forwardRef } from 'react'
import { View } from 'react-native'
import { cssInterop } from 'nativewind'
import { type VariantProps } from '@gluestack-ui/nativewind-utils'
import { createDivider } from '@gluestack-ui/divider'
import { dividerStyle } from './styles'

const UIDivider = createDivider({ Root: View })

cssInterop(UIDivider, { className: 'style' })

type Props = ComponentProps<typeof UIDivider> &
  VariantProps<typeof dividerStyle>

export const Divider = forwardRef<ElementRef<typeof UIDivider>, Props>(
  ({ className, orientation = 'horizontal', ...rest }, ref) => {
    return (
      <UIDivider
        ref={ref}
        {...rest}
        className={dividerStyle({
          orientation,
          class: className,
        })}
      />
    )
  },
)

Divider.displayName = 'Divider'
