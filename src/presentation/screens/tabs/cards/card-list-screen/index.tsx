import { FC } from 'react'
import { FlatList } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'

import { useCardsRepository } from '~/hooks/repositories/use-cards-repository'

import { VStack, Text, FontAwesome } from '~/presentation/components/ui'
import { LoadingCenter } from '~/presentation/components/templates/loading-center'
import { HeaderIconLink } from '~/presentation/components/templates/header-icon-title-link'

import { CardItem } from './components/card-item'

export const CardListScreen: FC = () => {
  const { t } = useTranslation()
  const { findMany } = useCardsRepository()

  const { data: cards, isLoading } = useQuery({
    queryKey: ['cards-list'],
    queryFn: findMany,
  })

  return (
    <VStack className="flex-1 px-8">
      <HeaderIconLink
        icon={
          <FontAwesome name="credit-card-alt" size={25} className="text-pink" />
        }
        title={t('Credit_card', { count: 3 })}
        linkTheme="tertiary"
        href="/cards/create"
      />

      <FlatList
        className="flex-1"
        contentContainerClassName="flex-grow gap-3 py-2"
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardItem item={item} />}
        ListEmptyComponent={
          <VStack className="flex-1 items-center justify-center">
            <Text className="mt-auto text-center text-lg font-semibold text-disabled">
              {t('CARD_LIST.EMPTY')}
            </Text>
            <Text className="mt-auto text-center text-grey-ternary">
              {t('CARD_LIST.CREATE_CARD_INSTRUCTION')}
            </Text>
          </VStack>
        }
      />

      {isLoading && <LoadingCenter />}
    </VStack>
  )
}
