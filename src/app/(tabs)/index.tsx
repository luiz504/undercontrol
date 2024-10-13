import { Divider, Heading, SafeAreaView, VStack } from '~/components/ui'

export default function SignedHomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-950 px-8">
      <VStack>
        <Heading>Tab One</Heading>
        <Divider />
      </VStack>
    </SafeAreaView>
  )
}
