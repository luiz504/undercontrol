import { SafeAreaView } from '~/components/ui/safe-area-view'
import { VStack } from '~/components/ui/vstack'
import { Heading } from '~/components/ui/heading'
import { Divider } from '~/components/ui/divider'

export function SummaryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-950 px-8">
      <VStack>
        <Heading>Summary</Heading>
        <Divider />
      </VStack>
    </SafeAreaView>
  )
}
