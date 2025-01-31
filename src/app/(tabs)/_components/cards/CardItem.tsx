import { FC } from 'react'

import { VStack } from '~/components/ui/vstack'
import { Heading } from '~/components/ui/heading'

import { Text } from '~/components/ui/text'
import { Card } from '~/domain/entities/Card'
type Props = {
  item: Card
}
export const CardItem: FC<Props> = ({ item }) => {
  return (
    <VStack className="gap-3 rounded-md bg-zinc-700 p-4">
      <Heading>{item.label}</Heading>
      <Text className="text-sm font-medium text-zinc-300">{item.bank}</Text>
    </VStack>
  )
}
