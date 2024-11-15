import { FC } from 'react'
import {
  LucideIcon,
  VStack,
  Heading,
  HStack,
  Text,
} from '~/presentation/components/ui'

import { Card } from '~/domain/entities/Card'

type Props = {
  item: Pick<Card, 'label' | 'institution' | 'closingDate' | 'dueDate'>
}
export const CardItem: FC<Props> = ({ item }) => {
  return (
    <VStack className="rounded-md bg-zinc-900 p-4">
      <HStack className="mb-2 items-center gap-3">
        <LucideIcon name="CreditCard" size={24} className="text-purple-500" />
        <Heading>{item.label}</Heading>
      </HStack>
      <HStack className="items-center gap-2">
        <Text className="text-sm font-medium text-purple-500">
          Closing date:
        </Text>
        <Text>{item.closingDate}</Text>
      </HStack>
      <HStack className="items-center gap-2">
        <Text className="text-sm font-medium text-purple-500">Due date:</Text>
        <Text>{item.dueDate}</Text>
      </HStack>
      <HStack className="items-center gap-2">
        <Text className="text-sm font-medium text-purple-500">
          Institution:
        </Text>

        <Text className="text-sm font-medium text-zinc-300">
          {item.institution || 'N/I'}
        </Text>
      </HStack>
    </VStack>
  )
}
