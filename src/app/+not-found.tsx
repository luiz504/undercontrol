import { Link, Stack } from 'expo-router'

import { GluestackUIProvider } from '~/components/ui/gluestack-ui-provider'
import { SafeAreaView } from '~/components/ui/safe-area-view'
import { Heading } from '~/components/ui/heading'
import { Text } from '~/components/ui/text'

export default function NotFoundScreen() {
  return (
    <GluestackUIProvider>
      <Stack.Screen options={{ title: 'Oops!', headerShown: false }} />
      <SafeAreaView className="flex-1 items-center justify-center bg-slate-950 p-8">
        <Heading className="mb-12">This screen doesn&apos;t exist.</Heading>

        <Link href="/">
          <Text className="text-lg font-semibold uppercase text-purple-500">
            Go to home screen!
          </Text>
        </Link>
      </SafeAreaView>
    </GluestackUIProvider>
  )
}
