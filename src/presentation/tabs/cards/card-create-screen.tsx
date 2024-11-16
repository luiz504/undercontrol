import { FC } from 'react'
import { router } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
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

import { cardSchema } from '~/domain/entities/Card'
import { useCardsRepository } from '~/hooks/repositories/use-cards-repository'

const formSchema = cardSchema.pick({
  label: true,
  closingDate: true,
  dueDate: true,
  currency: true,
})

type FormData = z.infer<typeof formSchema>
export const CardCreateScreen: FC = () => {
  const cardRepository = useCardsRepository()
  const { t } = useTranslation()
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })
  const onSubmitSuccess = async (data: FormData) => {
    try {
      const response = await cardRepository.insert(data)
      console.log(response) //eslint-disable-line
    } catch (err) {
      console.log(err)//eslint-disable-line
    }
  }

  return (
    <KeyboardAvoidingView className="flex-1">
      <ScrollView contentContainerClassName="flex-grow px-8 pb-8">
        <HeaderIconTitle
          icon={<LucideIcon name="Plus" size={30} className="text-pink" />}
          title={t('Credit_card')}
        />

        <Form.Section className="my-4">
          <Form.Label>{t('Label')}</Form.Label>
          <Controller
            control={control}
            name="label"
            render={({ field: { ref, onChange } }) => (
              <Input
                ref={ref}
                onChangeText={onChange}
                placeholder="Card xxx"
                maxLength={30}
                error={errors.label?.message}
                onSubmitEditing={() => setFocus('closingDate')}
              />
            )}
          />
        </Form.Section>

        <Form.Section className="mb-4">
          <Form.Label>{t('Closing_date')}</Form.Label>
          <Controller
            control={control}
            name="closingDate"
            render={({ field: { ref, value, onChange } }) => (
              <Select
                ref={ref}
                options={dueDayOptions}
                onValueChange={(option) => onChange(option.value)}
                value={dueDayOptions.find((d) => d.value === value)}
                error={errors.closingDate?.message}
              />
            )}
          />
        </Form.Section>

        <Form.Section className="mb-4">
          <Form.Label>{t('Due_date')}</Form.Label>
          <Controller
            control={control}
            name="dueDate"
            render={({ field: { ref, value, onChange } }) => (
              <Select
                ref={ref}
                options={dueDayOptions}
                onValueChange={(option) => onChange(option.value)}
                value={dueDayOptions.find((d) => d.value === value)}
                error={errors.dueDate?.message}
              />
            )}
          />
        </Form.Section>

        <Form.Section className="mb-6">
          <Form.Label>{t('Currency')}</Form.Label>
          <Controller
            control={control}
            name="currency"
            render={({ field: { ref, value, onChange } }) => (
              <Select
                ref={ref}
                options={currencyOptions}
                onValueChange={(option) => onChange(option.value)}
                value={currencyOptions.find((c) => c.value === value)}
                error={errors.currency?.message}
              />
            )}
          />
        </Form.Section>

        <Button
          theme="tertiary"
          label={t('Create')}
          isLoading={isSubmitting}
          onPress={handleSubmit(onSubmitSuccess)}
        />

        <Button
          className="mt-auto"
          variant="outline"
          theme="neutral"
          label={t('Cancel')}
          disabled={isSubmitting}
          onPress={() => router.back()}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
