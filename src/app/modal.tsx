import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'

import { VStack, Heading, Divider } from '~/presentation/components/ui'

export default function ModalScreen() {
  return (
    <VStack className="flex-1 items-center justify-center">
      <Heading className="text-3xl font-bold">Modal</Heading>
      <Divider className="my-3 w-5/6" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </VStack>
  )
}
