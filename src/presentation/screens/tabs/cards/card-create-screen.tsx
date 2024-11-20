import { FC } from 'react'
import { router } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { z, ZodError } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { cardSchema } from '~/domain/entities/Card'
import { UniqueConstraintError } from '~/domain/errors'

import { useCardsRepository } from '~/data/hooks/repositories/use-cards-repository'

import { HeaderIconTitle } from '~/presentation/components/templates/header-icon-title'
import {
  Input,
  Form,
  LucideIcon,
  Select,
  Button,
} from '~/presentation/components/ui'
import { currencyOptions } from '~/presentation/constants/currency-options'
import { DAY_OPTIONS } from '~/presentation/constants/due-day-options'
import { useToast } from '~/presentation/components/ui/toast'
import { useQueryInvalidator } from '~/data/hooks/queries/useQueryInvalidator'

const formSchema = cardSchema.pick({
  label: true,
  closingDate: true,
  dueDate: true,
  currency: true,
})

type FormData = z.infer<typeof formSchema>
export const CardCreateScreen: FC = () => {
  const toast = useToast()
  const { t } = useTranslation()
  const { invalidateFetchCards } = useQueryInvalidator()
  const cardRepository = useCardsRepository()
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
      await cardRepository.insert(data)
      toast.show({
        title: t('CARD_CREATE.TITLE.SUCCESS'),
      })
      await invalidateFetchCards()
      router.back()
    } catch (err) {
      let msg = 'GENERIC_CREATION_ERROR'
      if (err instanceof ZodError) {
        msg = err.issues[0].message
      }
      if (err instanceof UniqueConstraintError) {
        msg = 'UNIQUE_LABEL_CREATION_ERROR'
        setFocus('label')
      }
      toast.show({
        type: 'error',
        title: t('CARD_CREATE.TITLE.ERROR'),
        description: t(msg),
      })
    }
  }

  return (
    <KeyboardAvoidingView className="flex-1">
      <ScrollView contentContainerClassName="flex-grow px-8 pb-8">
        <HeaderIconTitle
          icon={<LucideIcon name="Plus" size={30} className="text-pink" />}
          title={t('Credit_card')}
        />

        <Form.VGroup className="my-4">
          <Form.Label>{t('Label')}</Form.Label>
          <Controller
            control={control}
            name="label"
            render={({ field: { ref, value, onChange } }) => (
              <Input
                ref={ref}
                defaultValue={value}
                onChangeText={onChange}
                placeholder={t('CREDIT_CARD_PLACEHOLDER')}
                maxLength={30}
                error={errors.label?.message}
                onSubmitEditing={() => setFocus('closingDate')}
              />
            )}
          />
        </Form.VGroup>

        <Form.VGroup className="mb-4">
          <Form.Label>{t('Closing_date')}</Form.Label>
          <Controller
            control={control}
            name="closingDate"
            render={({ field: { ref, value, onChange } }) => (
              <Select
                ref={ref}
                options={DAY_OPTIONS}
                onValueChange={(option) => onChange(option.value)}
                value={DAY_OPTIONS.find((d) => d.value === value)}
                error={errors.closingDate?.message}
              />
            )}
          />
        </Form.VGroup>

        <Form.VGroup className="mb-4">
          <Form.Label>{t('Due_date')}</Form.Label>
          <Controller
            control={control}
            name="dueDate"
            render={({ field: { ref, value, onChange } }) => (
              <Select
                ref={ref}
                options={DAY_OPTIONS}
                onValueChange={(option) => onChange(option.value)}
                value={DAY_OPTIONS.find((d) => d.value === value)}
                error={errors.dueDate?.message}
              />
            )}
          />
        </Form.VGroup>

        <Form.VGroup className="mb-6">
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
        </Form.VGroup>

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
