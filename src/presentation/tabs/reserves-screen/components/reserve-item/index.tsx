import { FC } from 'react'

import { VStack } from '~/presentation/components/ui/vstack'
import { Heading } from '~/presentation/components/ui/heading'
import { Box } from '~/presentation/components/ui/box'
import { Text } from '~/presentation/components/ui/text'

import { Reserve } from '~/domain/entities/Reserve'
import { reserveStyle } from './styles'
type Props = {
  item: Pick<Reserve, 'label' | 'institution' | 'currency'> & {
    balance: number
  }
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
      <Text className="text-sm font-medium text-zinc-300">
        {item.institution || 'N/I'}
      </Text>
      <Box className="mt-2 items-end">
        <Text className={reserveStyle.balance({ isInDeficit })}>{balance}</Text>
      </Box>
    </VStack>
  )
}
