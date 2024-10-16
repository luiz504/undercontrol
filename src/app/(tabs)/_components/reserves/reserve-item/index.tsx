import { FC } from 'react'

import { VStack } from '~/components/ui/vstack'
import { Heading } from '~/components/ui/heading'
import { Box } from '~/components/ui/box'
import { Text } from '~/components/ui/text'

import { Reserve } from '~/domain/entities/Reserve'
import { reserveStyle } from './styles'
type Props = {
  item: Reserve
}

export const ReserveItem: FC<Props> = ({ item }) => {
  const balance = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: item.currency,
  }).format(item.balance)
  const isInDeficit = item.balance < 0
  return (
    <VStack className={reserveStyle.wrapper({})}>
      <Heading>{item.label}</Heading>
      <Text className="text-sm font-medium text-zinc-300">{item.bank}</Text>
      <Box className="mt-2 items-end">
        <Text className={reserveStyle.balance({ isInDeficit })}>{balance}</Text>
      </Box>
    </VStack>
  )
}
