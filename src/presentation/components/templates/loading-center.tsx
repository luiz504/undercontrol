import { ComponentProps, FC } from 'react'
import { ActivityIndicator } from 'react-native'
import { cn } from '@gluestack-ui/nativewind-utils/cn'

import { Center } from '../ui'

type Props = Omit<ComponentProps<typeof Center>, 'children'>
export const LoadingCenter: FC<Props> = ({ className, ...rest }) => {
  return (
    <Center className={cn('flex-1 p-4', className)} {...rest}>
      <ActivityIndicator size={'large'} className="text-purple" />
    </Center>
  )
}
