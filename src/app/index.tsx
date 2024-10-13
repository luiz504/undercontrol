import { router } from 'expo-router'
import { ScrollView, TouchableOpacity } from 'react-native'

import { Box, SafeAreaView, Text } from '~/components/ui'
import { Heading } from '~/components/ui/heading'
import { LucideIcon } from '~/components/ui/lucide-icon'

export default function InitialScreen() {
  const handleClientEnter = () => {
    router.replace('/(tabs)')
  }
  return (
    <SafeAreaView className="flex-1 bg-zinc-950">
      <ScrollView contentContainerClassName="flex-grow px-8" className="flex-1">
        <Box className="mt-12 items-center justify-center gap-3">
          <LucideIcon name="CreditCard" size={40} className="text-purple-500" />
          <Heading className="text-3xl">Under Control</Heading>
        </Box>

        <Box className="my-auto">
          <Heading className="text-xl">
            We want to keep your data even more secure. That&apos;s why
            we&apos;ll always ask for a password to access the app.
          </Heading>
        </Box>

        <Box className="mt-auto items-center pb-8">
          <TouchableOpacity
            className="w-full items-center rounded-md bg-purple-500 px-5 py-3"
            activeOpacity={0.8}
            onPress={handleClientEnter}
          >
            <Text className="font-semibold uppercase text-zinc-50">Enter</Text>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </SafeAreaView>
  )
}
