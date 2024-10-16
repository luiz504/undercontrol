import { FlatList, TouchableOpacity } from 'react-native'

import { SafeAreaView } from '~/components/ui/safe-area-view'
import { VStack } from '~/components/ui/vstack'
import { Heading } from '~/components/ui/heading'
import { Divider } from '~/components/ui/divider'
import { Box } from '~/components/ui/box'
import { LucideIcon } from '~/components/ui/lucide-icon'
import { Text } from '~/components/ui/text'

import { CardItem } from '../_components/cards/CardItem'
import { mockCards } from '../_components/cards/mock-cards'
import { Link } from 'expo-router'

export default function CardsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-950 px-8">
      <VStack className="flex-1">
        <Heading>Cards</Heading>
        <Divider className="my-2" />
        <FlatList
          className="flex-1"
          contentContainerClassName="flex-grow gap-3 py-2"
          data={mockCards}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardItem item={item} />}
        />
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
