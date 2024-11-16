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
  item: Pick<Card, 'label' | 'closingDate' | 'dueDate'>
}
export const CardItem: FC<Props> = ({ item }) => {
  return (
    <VStack className="rounded-md bg-black-secondary p-4">
      <HStack className="mb-2 items-center gap-3">
        <LucideIcon name="CreditCard" size={24} className="text-purple" />
        <Heading>{item.label}</Heading>
      </HStack>
      <HStack className="items-center gap-2">
        <Text className="text-sm font-medium text-purple">Closing date:</Text>
        <Text>{item.closingDate}</Text>
      </HStack>
      <HStack className="items-center gap-2">
        <Text className="text-sm font-medium text-purple">Due date:</Text>
        <Text>{item.dueDate}</Text>
      </HStack>
      <HStack className="items-center gap-2">
        <Text className="text-sm font-medium text-purple">Institution:</Text>
      </HStack>
    </VStack>
  )
}
