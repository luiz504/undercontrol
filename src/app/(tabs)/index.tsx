import { Divider, Heading, SafeAreaView, VStack } from '~/components/ui'

export default function SummaryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-950 px-8">
      <VStack>
        <Heading>Summary</Heading>
        <Divider />
      </VStack>
    </SafeAreaView>
  )
}
