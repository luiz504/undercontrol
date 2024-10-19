import { SafeAreaView } from '~/components/ui/safe-area-view'
import { VStack } from '~/components/ui/vstack'
import { Heading } from '~/components/ui/heading'
import { Divider } from '~/components/ui/divider'
import { Input } from '~/components/ui/input'

import { Pressable } from 'react-native'
import { Text } from '~/components/ui/text'
import { useState } from 'react'

export default function CreateCardScreen() {
  const [isOpen, setIsOpen] = useState(false)

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

        <Pressable
          className="h-11 justify-center rounded-md border border-neutral-500 px-4"
          onPress={() => setIsOpen(!isOpen)}
        >
          <Text>{isOpen ? 'Close' : 'Open'}</Text>
        </Pressable>
      </VStack>
    </SafeAreaView>
  )
}
