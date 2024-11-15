import { FC } from 'react'
import { Plus } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'
import { FlatList } from 'react-native'
import { Link } from 'expo-router'
import { useQuery } from '@tanstack/react-query'

import {
  SafeAreaView,
  VStack,
  Heading,
  Divider,
  Box,
  Text,
  HStack,
  FontAwesome,
  Button,
} from '~/presentation/components/ui'
import { CardItem } from './components/card-item'

import { useCardsRepository } from '~/hooks/repositories/use-cards-repository'
import { LoadingCenter } from '~/presentation/components/templates/loading-center'

export const CardListScreen: FC = () => {
  const { t } = useTranslation()
  const { findMany } = useCardsRepository()

  const { data: cards, isLoading } = useQuery({
    queryKey: ['cards-list'],
    queryFn: findMany,
  })

  return (
    <SafeAreaView className="flex-1 px-8">
      <VStack className="flex-1">
        <HStack className="items-center gap-3">
          <FontAwesome
            name="credit-card-alt"
            size={32}
            className="text-purple"
          />

          <Heading>{t('Credit_card', { count: 0 })}</Heading>
        </HStack>
        <Divider className="my-2" />
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
            <Button variant="outline" icon={Plus} label={t('Credit_card')} />
          </Link>
        </Box>
      </VStack>
    </SafeAreaView>
  )
}
