import { useState } from 'react'
import { Pressable } from 'react-native'

import {
  SafeAreaView,
  VStack,
  Heading,
  Divider,
  Input,
  Text,
  Form,
} from '~/components/ui'

export default function CreateCardScreen() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SafeAreaView className="flex-1 bg-zinc-950 px-8">
      <VStack>
        <Heading>Create Card</Heading>
        <Divider className="my-2" />
        <Form.Section className="mb-4">
          <Form.Label>Label</Form.Label>
          <Input.TextInput placeholder="Placeholder" />
        </Form.Section>

        <Form.Section>
          <Form.Label>Label</Form.Label>
          <Input.TextInput error="lorem" />
        </Form.Section>

        <Form.Section>
          <Form.Label>Label</Form.Label>
          <Input.PWInput error="lorem" />
        </Form.Section>

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
