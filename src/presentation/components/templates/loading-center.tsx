import { ComponentProps, FC } from 'react'
import { ActivityIndicator } from 'react-native'
import { cn } from '@gluestack-ui/nativewind-utils/cn'

import { Center } from '../ui'
import { tva } from '@gluestack-ui/nativewind-utils/tva'
import { VariantProps } from '@gluestack-ui/nativewind-utils'

const indicatorStyle = tva({
  variants: {
    variant: {
      primary: 'text-purple',
      secondary: 'text-cyan',
      tertiary: 'text-pink',
      neutral: 'text-white',
    },
  },
})

type Props = Omit<ComponentProps<typeof Center>, 'children'> &
  VariantProps<typeof indicatorStyle>

export const LoadingCenter: FC<Props> = ({
  className,
  variant = 'primary',
  ...rest
}) => {
  return (
    <Center className={cn('flex-1 p-4', className)} {...rest}>
      <ActivityIndicator size="large" className={indicatorStyle({ variant })} />
    </Center>
  )
}
