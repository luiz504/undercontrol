import { FC } from 'react'
import { useTranslation } from 'react-i18next'
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
} from '~/presentation/components/ui'

import { currencyOptions } from '~/presentation/constants/currency-options'
import { dueDayOptions } from '~/presentation/constants/due-day-options'

export const CardCreateScreen: FC = () => {
  const { t } = useTranslation()
  return (
    <SafeAreaView className="flex-1 px-8">
      <ScrollView>
        <VStack>
          <HStack className="items-center gap-3">
            <LucideIcon name="Plus" size={30} className="text-purple" />

            <Heading>{t('Credit_card')}</Heading>
          </HStack>

          <Divider className="my-2" />

          <Form.Section className="my-4">
            <Form.Label>{t('Label')}</Form.Label>
            <Input placeholder="Card xxx" />
          </Form.Section>

          <Form.Section className="mb-4">
            <Form.Label>{t('Institution')}</Form.Label>
            <Input placeholder="Bank xxx" />
          </Form.Section>

          <Form.Section className="mb-4">
            <Form.Label>{t('Closing_date')}</Form.Label>
            <Select
              value={{ value: '01', label: '1' }}
              options={dueDayOptions}
            />
          </Form.Section>

          <Form.Section className="mb-4">
            <Form.Label>{t('Due_date')}</Form.Label>
            <Select options={dueDayOptions} />
          </Form.Section>

          <Form.Section className="mb-6">
            <Form.Label>{t('Currency')}</Form.Label>
            <Select options={currencyOptions} />
          </Form.Section>

          <Button label={t('Create')} />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  )
}
