import { FC } from 'react'

import { VStack } from '~/presentation/components/ui/vstack'
import { Heading } from '~/presentation/components/ui/heading'
import { Text } from '~/presentation/components/ui/text'

import { Reserve } from '~/domain/entities/Reserve'

import { cn } from '@gluestack-ui/nativewind-utils/cn'
type Props = {
  item: Pick<Reserve, 'label' | 'institution' | 'currency'> & {
    balance: number
  }
}

export const ReserveItem: FC<Props> = ({ item }) => {
  return (
    <VStack
      className={cn(
        'rounded-md p-4 shadow-sm',
        'bg-cyan-light',
        'border-2 border-black-secondary',
      )}
    >
      <Heading className="text-cyan">{item.label}</Heading>
      <Text className="text-sm font-medium text-cyan-secondary">
        {item.institution || 'N/I'}
      </Text>
    </VStack>
  )
}
