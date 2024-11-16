import { FC } from 'react'
import { FlatList } from 'react-native'
import { Link } from 'expo-router'
import { Plus } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'

import { useCardsRepository } from '~/hooks/repositories/use-cards-repository'

import {
  VStack,
  Box,
  Text,
  FontAwesome,
  Button,
} from '~/presentation/components/ui'
import { LoadingCenter } from '~/presentation/components/templates/loading-center'
import { HeaderIconTitle } from '~/presentation/components/templates/header-icon-title'
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
      <HeaderIconTitle
        icon={
          <FontAwesome name="credit-card-alt" size={25} className="text-pink" />
        }
        title={t('Credit_card', { count: 3 })}
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

      <Box className="mt-auto py-6">
        <Link asChild href="/cards/create">
          <Button
            variant="outline"
            theme="tertiary"
            icon={Plus}
            label={t('Credit_card')}
          />
        </Link>
      </Box>
    </VStack>
  )
}
