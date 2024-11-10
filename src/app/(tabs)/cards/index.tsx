import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { useQuery } from '@tanstack/react-query'

import {
  SafeAreaView,
  VStack,
  Heading,
  Divider,
  Box,
  LucideIcon,
  Text,
  HStack,
  Center,
  FontAwesome,
} from '~/components/ui'
import { CardItem } from './_components/card-item'

import { useCardsRepository } from '~/hooks/repositories/use-cards-repository'

export default function CardsScreen() {
  const { findMany } = useCardsRepository()

  const { data: cards, isLoading } = useQuery({
    queryKey: ['cards-list'],
    queryFn: findMany,
  })

  return (
    <SafeAreaView className="flex-1 bg-zinc-950 px-8">
      <VStack className="flex-1">
        <HStack className="items-center gap-3">
          <FontAwesome
            name="credit-card-alt"
            size={32}
            className="text-purple-500"
          />

          <Heading>Cards</Heading>
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
              <Text className="mt-auto text-center text-lg font-semibold text-zinc-400">
                No cards created yet.
              </Text>
              <Text className="mt-auto text-center text-zinc-400">
                Click on the button below to create one
              </Text>
            </VStack>
          }
        />

        {isLoading && (
          <Center className="flex-1">
            <ActivityIndicator />
          </Center>
        )}
        <Box className="mt-auto py-8">
          <Link asChild href="/cards/create">
            <TouchableOpacity className="flex-row items-center justify-center gap-3 rounded-md border border-purple-500 p-4">
              <LucideIcon name="Plus" size={30} className="text-purple-500" />
              <Text className="text-lg font-semibold text-purple-500">
                Card
              </Text>
            </TouchableOpacity>
          </Link>
        </Box>
      </VStack>
    </SafeAreaView>
  )
}
