import { FC } from 'react'
import {
  Heading,
  HStack,
  Text,
  FontAwesome,
} from '~/presentation/components/ui'

import { Card } from '~/domain/entities/card'
import { useTranslation } from 'react-i18next'

import { TouchableOpacity } from 'react-native'
import { useLinkProps } from '@react-navigation/native'

type Props = {
  item: Pick<Card, 'label' | 'closingDate' | 'dueDate' | 'id'>
}
export const CardItem: FC<Props> = ({ item }) => {
  const { t } = useTranslation()
  const _linkProps = useLinkProps({
    screen: '(Protected)',
    params: {
      screen: 'Cards',
      params: {
        screen: 'Details',
        params: {
          id: item.id,
        },
      },
    },
  })
  return (
    <TouchableOpacity
      className="rounded-md border border-pink-secondary bg-pink-transparent p-4"
      {..._linkProps}
    >
      <HStack className="mb-2 items-center gap-3">
        <FontAwesome name="credit-card-alt" size={20} className="text-pink" />
        <Heading size="md" className="capitalize">
          {item.label}
        </Heading>
      </HStack>
      <HStack className="gap-3">
        <HStack className="items-center gap-2">
          <Text className="text-sm font-medium text-pink">
            {t('Closing_date')}:
          </Text>
          <Text className="text-pink-secondary">{item.closingDate}</Text>
        </HStack>
        <HStack className="items-center gap-2">
          <Text className="text-sm font-medium text-pink">
            {t('Due_date')}:
          </Text>
          <Text className="text-pink-secondary">{item.dueDate}</Text>
        </HStack>
      </HStack>
    </TouchableOpacity>
  )
}
