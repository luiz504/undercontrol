import { ComponentProps, ElementRef, forwardRef } from 'react'
import { View } from 'react-native'

import { centerStyle } from './styles'

type Props = ComponentProps<typeof View> & { className?: string }

const Center = forwardRef<ElementRef<typeof View>, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <View className={centerStyle({ class: className })} {...rest} ref={ref} />
    )
  },
)

Center.displayName = 'Center'

export { Center }
