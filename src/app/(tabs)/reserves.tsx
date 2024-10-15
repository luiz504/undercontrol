import { FlatList, TouchableOpacity } from 'react-native'
import {
  Box,
  Divider,
  Heading,
  LucideIcon,
  SafeAreaView,
  Text,
  VStack,
} from '~/components/ui'

import { ReserveItem } from './_components/reserves/reserve-item'
import { mockReserves } from './_components/reserves/mock-reserves'

export default function ReservesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-950 px-8">
      <VStack>
        <Heading>Reserves</Heading>
        <Divider className="my-2" />
      </VStack>
      <FlatList
        className="flex-1"
        contentContainerClassName="flex-grow gap-3 py-2"
        data={mockReserves}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ReserveItem item={item} />}
      />

      <Box className="mt-auto py-8">
        <TouchableOpacity
          activeOpacity={0.8}
          className="flex-row items-center justify-center gap-3 rounded-md border border-purple-500 p-4"
        >
          <LucideIcon name="Plus" size={30} className="text-purple-500" />
          <Text className="text-lg font-semibold text-purple-500">Reserve</Text>
        </TouchableOpacity>
      </Box>
    </SafeAreaView>
  )
}
