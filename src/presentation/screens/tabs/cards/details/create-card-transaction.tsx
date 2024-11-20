import { FC } from 'react'
import { useLocalSearchParams, router, Link } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { ChevronLeft } from 'lucide-react-native'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z, ZodError } from 'zod'

import { transactionInsertSchema } from '~/domain/entities/transaction'

import { useQueryInvalidator } from '~/data/hooks/queries/useQueryInvalidator'
import { useTransactionsRepository } from '~/data/hooks/repositories/user-transactions-repository'
import { useGetCardByIdQuery } from '~/data/hooks/queries/useGetCardByIdQuery'

import { LoadingCenter } from '~/presentation/components/templates/loading-center'
import { useToast } from '~/presentation/components/ui/toast'
import {
  Button,
  Form,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from '~/presentation/components/ui'
import { DatePicker } from '~/presentation/components/ui/date-picker'

import { CardItem } from '../card-list-screen/card-item'

const formSchema = transactionInsertSchema.pick({
  amount: true,
  description: true,
  installments: true,
  purchaseDate: true,
})
type FormData = z.infer<typeof formSchema>

export const CreateCardTransaction: FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  const { t } = useTranslation()
  const toast = useToast()

  const { invalidateFetchTransactionsByCardId } = useQueryInvalidator()
  const transactionsRepository = useTransactionsRepository()
  const { data, isLoading } = useGetCardByIdQuery({
    cardId: id,
    onSuccess: (card) => {
      if (!card) {
        toast.show({
          type: 'error',
          title: 'Card not found',
        })
        router.replace('/(tabs)/cards')
      }
    },
  })

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      installments: 1,
      purchaseDate: new Date(),
      amount: 2000,
    },
  })

  const onSubmitSuccess = async (data: FormData) => {
    try {
      await transactionsRepository.insert({ ...data, cardId: id })
      toast.show({
        title: t('TRANSACTION_CREATE.TITLE.SUCCESS'),
      })
      await invalidateFetchTransactionsByCardId(id)
      router.push(`/(tabs)/cards/details/${id}`)
    } catch (err) {
      let msg = 'GENERIC_CREATION_ERROR'
      if (err instanceof ZodError) {
        msg = err.issues[0].message
      }
      toast.show({
        type: 'error',
        title: msg,
      })
    }
  }

  if (isLoading || !data) {
    return <LoadingCenter />
  }

  return (
    <VStack className="flex-1 px-8">
      <VStack className="mb-8 mt-4 gap-4">
        <HStack className="items-center gap-3">
          <Link asChild href={`/(tabs)/cards/details/${id}`}>
            <Button variant="link" theme="neutral" icon={ChevronLeft} />
          </Link>
          <Heading className="capitalize">Add transaction</Heading>
        </HStack>

        <CardItem item={data} />

        <Heading size="sm">Transaction Data</Heading>

        <VStack className="gap-3 rounded border border-black-secondary p-3 shadow-sm">
          <Form.HGroup>
            <Form.Label>{t('Currency')}:</Form.Label>
            <Text className="text-grey-ternary">{data.currency}</Text>
          </Form.HGroup>

          <Form.VGroup>
            <Form.Label>{t('Purchase_date')}</Form.Label>
            <Controller
              control={control}
              name="purchaseDate"
              render={({ field: { onChange, value, ref } }) => (
                <DatePicker
                  ref={ref}
                  onChange={(_, date) => date && onChange(date)}
                  value={value}
                  error={errors.purchaseDate?.message}
                />
              )}
            />
          </Form.VGroup>

          <Form.VGroup>
            <Form.Label>{t('Amount')}</Form.Label>
            <Controller
              control={control}
              name="amount"
              render={({ field: { onChange, value, ref } }) => (
                <Input
                  ref={ref}
                  placeholder="0.00"
                  keyboardType="numeric"
                  defaultValue={String(value ?? '')}
                  onChangeText={(text) => onChange(Number(text))}
                  error={errors.amount?.message}
                />
              )}
            />
          </Form.VGroup>

          <Form.VGroup>
            <Form.Label>{t('Installments')}</Form.Label>
            <Controller
              control={control}
              name="installments"
              render={({ field: { onChange, value, ref } }) => (
                <Input
                  ref={ref}
                  placeholder="1"
                  keyboardType="numeric"
                  maxLength={2}
                  value={String(value || '')}
                  onChangeText={(value) => onChange(parseInt(value, 10))}
                  error={errors.installments?.message}
                />
              )}
            />
          </Form.VGroup>

          <Button
            theme="primary"
            label={t('Add')}
            className="mt-4"
            onPress={handleSubmit(onSubmitSuccess)}
            isLoading={isSubmitting}
          />
        </VStack>
      </VStack>
    </VStack>
  )
}
