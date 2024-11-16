import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { KeyboardAvoidingView, ScrollView } from 'react-native'

import { HeaderIconTitle } from '~/presentation/components/templates/header-icon-title'
import {
  Input,
  Form,
  LucideIcon,
  Select,
  Button,
} from '~/presentation/components/ui'
import { currencyOptions } from '~/presentation/constants/currency-options'
import { dueDayOptions } from '~/presentation/constants/due-day-options'

export const CardCreateScreen: FC = () => {
  const { t } = useTranslation()
  return (
    <KeyboardAvoidingView className="flex-1">
      <ScrollView contentContainerClassName="flex-grow px-8 pb-8">
        <HeaderIconTitle
          icon={<LucideIcon name="Plus" size={30} className="text-pink" />}
          title={t('Credit_card')}
        />

        <Form.Section className="my-4">
          <Form.Label>{t('Label')}</Form.Label>
          <Input placeholder="Card xxx" />
        </Form.Section>

        <Form.Section className="mb-4">
          <Form.Label>{t('Closing_date')}</Form.Label>
          <Select value={{ value: '01', label: '1' }} options={dueDayOptions} />
        </Form.Section>

        <Form.Section className="mb-4">
          <Form.Label>{t('Due_date')}</Form.Label>
          <Select options={dueDayOptions} />
        </Form.Section>

        <Form.Section className="mb-6">
          <Form.Label>{t('Currency')}</Form.Label>
          <Select options={currencyOptions} />
        </Form.Section>

        <Button theme="tertiary" label={t('Create')} />

        <Button
          className="mt-auto"
          variant="outline"
          theme="neutral"
          label={t('Cancel')}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
