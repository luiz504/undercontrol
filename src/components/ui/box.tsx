import React, { ElementRef, forwardRef } from 'react'
import { View, ViewProps } from 'react-native'

type Props = ViewProps & { className?: string }

export const Box = forwardRef<ElementRef<typeof View>, Props>(
  ({ children, ...rest }, ref) => {
    return (
      <View ref={ref} {...rest}>
        {children}
      </View>
    )
  },
)

Box.displayName = 'Box'
