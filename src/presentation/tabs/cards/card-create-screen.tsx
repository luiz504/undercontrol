import { FC } from 'react'
import { ScrollView } from 'react-native'

import {
  SafeAreaView,
  VStack,
  Heading,
  Divider,
  Input,
  Form,
  HStack,
  LucideIcon,
  Select,
  Button,
} from '~/components/ui'

import { currencyOptions } from '~/presentation/constants/currency-options'
import { dueDayOptions } from '~/presentation/constants/due-day-options'

export const CardCreateScreen: FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-zinc-950 px-8">
      <ScrollView>
        <VStack>
          <HStack className="items-center gap-3">
            <LucideIcon name="Plus" size={30} className="text-purple-500" />

            <Heading>Card</Heading>
          </HStack>

          <Divider className="my-2" />

          <Form.Section className="my-4">
            <Form.Label>Label</Form.Label>
            <Input placeholder="Card xxx" />
          </Form.Section>

          <Form.Section className="mb-4">
            <Form.Label>Institution</Form.Label>
            <Input placeholder="Bank xxx" />
          </Form.Section>

          <Form.Section className="mb-4">
            <Form.Label>Closing date</Form.Label>
            <Select options={dueDayOptions} />
          </Form.Section>

          <Form.Section className="mb-4">
            <Form.Label>Due date</Form.Label>
            <Select options={dueDayOptions} />
          </Form.Section>

          <Form.Section className="mb-6">
            <Form.Label>Currency</Form.Label>
            <Select options={currencyOptions} />
          </Form.Section>

          <Button label="Create" />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  )
}
