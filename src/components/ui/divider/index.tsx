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

const Divider = forwardRef<ElementRef<typeof UIDivider>, Props>(
  ({ className, orientation = 'horizontal', ...props }, ref) => {
    return (
      <UIDivider
        ref={ref}
        {...props}
        className={dividerStyle({
          orientation,
          class: className,
        })}
      />
    )
  },
)

Divider.displayName = 'Divider'

export { Divider }
