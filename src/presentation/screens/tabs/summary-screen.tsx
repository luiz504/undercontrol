import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useFetchTransactionsQuery } from '~/data/hooks/queries/useFetchTransactionsQuery'

import { HeaderIconTitle } from '~/presentation/components/templates/header-icon-title'
import { Button, Entypo, Text, VStack } from '~/presentation/components/ui'

import { useQueryFocusAware } from '~/infra/cache/use-query-focus-aware'
import { FlatList } from 'react-native'

export function SummaryScreen() {
  const { t } = useTranslation()

  const isFocused = useQueryFocusAware()
  const { data, refetch } = useFetchTransactionsQuery({
    enabled: isFocused,
  })
  useEffect(() => {
    console.log('🍄🍄🍄', JSON.stringify(data, null, 2)) //eslint-disable-line
  }, [data])

  return (
    <VStack className="flex-1 px-8">
      <HeaderIconTitle
        icon={<Entypo size={28} name="line-graph" className="text-purple" />}
        title={t('Summary')}
      />
      <Button onPress={() => refetch()} label={t('Refresh')} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerClassName="mt-4 gap-3"
        renderItem={({ item }) => (
          <VStack className="rounded-md border border-purple bg-purple-light p-4 shadow-sm">
            <Text numberOfLines={1}>amount:{item.amount}</Text>
            <Text numberOfLines={1}>desc:{item.description || '--'}</Text>
            <Text numberOfLines={1}>
              date:{item.purchaseDate.toISOString()}
            </Text>
            <Text numberOfLines={1}>type:{item.card.label}</Text>
          </VStack>
        )}
      />
    </VStack>
  )
}
