import { Divider, Heading, SafeAreaView, VStack } from '~/components/ui'

export default function ReservesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-950 px-8">
      <VStack>
        <Heading>Reserves</Heading>
        <Divider />
      </VStack>
    </SafeAreaView>
  )
}
