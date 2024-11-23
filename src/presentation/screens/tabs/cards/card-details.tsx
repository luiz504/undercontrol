import { FC } from 'react'
import { FlatList, View } from 'react-native'

import { ChevronLeft, Plus } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'
import { format } from 'date-fns'

import { useGetCardByIdQuery } from '~/data/hooks/queries/useGetCardByIdQuery'
import { useFetchCardTransactionsQuery } from '~/data/hooks/queries/useFetchCardTransactionsQuery'

import { LoadingCenter } from '~/presentation/components/templates/loading-center'
import {
  Button,
  Heading,
  HStack,
  Text,
  VStack,
} from '~/presentation/components/ui'
import { useToast } from '~/presentation/components/ui/toast'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CardsStackParamList } from '~/main/routes/types'

type Props = NativeStackScreenProps<CardsStackParamList, 'Details'>
export const CardDetailsScreen: FC<Props> = ({
  navigation,
  route: {
    params: { id },
  },
}) => {
  const { t } = useTranslation()

  const toast = useToast()

  const { data: card, isLoading: isLoadingCard } = useGetCardByIdQuery({
    cardId: id,
    onSuccess: (card) => {
      if (!card) {
        navigation.goBack()

        toast.show({
          type: 'error',
          title: t('Card_not_found'),
        })
      }
    },
  })
  const { data: transactions, isLoading: isLoadingTransactions } =
    useFetchCardTransactionsQuery(id)

  const isLoading = isLoadingCard || isLoadingTransactions

  if (isLoading || !card) {
    return <LoadingCenter />
  }

  return (
    <VStack className="flex-1 px-8">
      <VStack className="gap-3 pb-8 pt-4">
        <HStack className="items-center gap-3">
          <Button
            variant="link"
            theme="neutral"
            icon={ChevronLeft}
            onPress={() => navigation.goBack()}
          />

          <Heading size="sm" className="capitalize">
            Return
          </Heading>
        </HStack>
      </VStack>
      <HStack className="mb-6 gap-3 rounded border border-purple p-4">
        <VStack>
          <Heading className="capitalize">{card.label}</Heading>
          <HStack className="gap-3">
            <HStack className="items-center gap-2">
              <Text className="text-sm font-medium text-white-secondary">
                {t('Closing_date')}:
              </Text>
              <Text className="text-grey-ternary">{card.closingDate}</Text>
            </HStack>
            <HStack className="items-center gap-2">
              <Text className="text-sm font-medium text-white-secondary">
                {t('Due_date')}:
              </Text>
              <Text className="text-grey-ternary">{card.dueDate}</Text>
            </HStack>
          </HStack>
        </VStack>
      </HStack>

      <VStack>
        <HStack className="mb-4 items-center">
          <Heading size="sm" className="flex-1">
            Transactions
          </Heading>

          <Button
            variant="outline"
            theme="neutral"
            icon={Plus}
            onPress={() => navigation.navigate('CreateCardTransaction', { id })}
          />
        </HStack>

        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          contentContainerClassName="gap-3"
          renderItem={({ item }) => (
            <View
              key={item.id}
              className="rounded-md border border-purple bg-purple-transparent p-4"
            >
              <Text>
                Purchase date: {format(item.purchaseDate, 'dd/MM/yyyy')}
              </Text>
              <Text>Installments: {item.installments}</Text>
              <Text>Amount: {item.amount}</Text>
            </View>
          )}
        />
      </VStack>
    </VStack>
  )
}
