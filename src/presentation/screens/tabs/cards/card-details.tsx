import { useQuery } from '@tanstack/react-query'
import { Link, router, useLocalSearchParams } from 'expo-router'
import { ChevronLeft, Plus } from 'lucide-react-native'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useCardsRepository } from '~/hooks/repositories/use-cards-repository'
import { LoadingCenter } from '~/presentation/components/templates/loading-center'

import {
  Button,
  Heading,
  HStack,
  Text,
  VStack,
} from '~/presentation/components/ui'
import { useToast } from '~/presentation/components/ui/toast'

export const CardDetailsScreen: FC = () => {
  const { t } = useTranslation()
  const { id } = useLocalSearchParams<{ id: string }>()
  const cardsRepository = useCardsRepository()
  const toast = useToast()
  const { data, isLoading } = useQuery({
    queryKey: ['card-details', id],
    queryFn: async () => {
      const card = await cardsRepository.findById(id)
      // await new Promise((resolve) => setTimeout(resolve, 4000))
      if (!card) {
        toast.show({
          type: 'error',
          title: 'Card not found',
        })
        router.replace('/(tabs)/cards')
        return null
      }
      return card
    },
  })

  if (isLoading || !data) {
    return <LoadingCenter />
  }

  return (
    <VStack className="flex-1 px-8">
      <VStack className="gap-3 pb-8 pt-4">
        <HStack className="items-center gap-3">
          <Link asChild href="/(tabs)/cards">
            <Button variant="link" theme="tertiary" icon={ChevronLeft} />
          </Link>
          <Heading className="capitalize">{data.label}</Heading>
        </HStack>
        <HStack className="justify-center gap-3">
          <HStack className="gap-3">
            <HStack className="items-center gap-2">
              <Text className="text-sm font-medium text-pink">
                {t('Closing_date')}:
              </Text>
              <Text className="text-pink-secondary">{data.closingDate}</Text>
            </HStack>
            <HStack className="items-center gap-2">
              <Text className="text-sm font-medium text-pink">
                {t('Due_date')}:
              </Text>
              <Text className="text-pink-secondary">{data.dueDate}</Text>
            </HStack>
          </HStack>
        </HStack>
      </VStack>

      <VStack>
        <HStack>
          <Heading size="sm" className="flex-1">
            Transactions
          </Heading>
          <Link asChild href="/(tabs)/cards">
            <Button variant="outline" theme="tertiary" icon={Plus} />
          </Link>
        </HStack>
      </VStack>
    </VStack>
  )
}
