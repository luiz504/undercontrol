import { SafeAreaView } from '~/components/ui/safe-area-view'
import { VStack } from '~/components/ui/vstack'
import { Heading } from '~/components/ui/heading'
import { Divider } from '~/components/ui/divider'
import { Input } from '~/components/ui/input'

export default function CreateCardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-950 px-8">
      <VStack>
        <Heading>Create Card</Heading>
        <Divider className="my-2" />
        <Input.Wrapper className="mb-4">
          <Input.Label>Label</Input.Label>
          <Input.TextInput placeholder="Placeholder" />
        </Input.Wrapper>

        <Input.Wrapper>
          <Input.Label>Label</Input.Label>
          <Input.TextInput error="lorem" />
        </Input.Wrapper>

        <Input.Wrapper>
          <Input.Label>Label</Input.Label>
          <Input.PWInput error="lorem" />
        </Input.Wrapper>
      </VStack>
    </SafeAreaView>
  )
}
