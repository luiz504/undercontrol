import { z } from 'zod'
import { CURRENCIES } from './shared-properties'
const validateDateValue = (val: string) => {
  const num = Number(val)
  return !isNaN(num) && num >= 1 && num <= 28
}
const validateClosingDateAndDueDate = ({
  closingDate,
  dueDate,
}: {
  closingDate: string
  dueDate: string
}) => {
  const _closingDate = Number(closingDate)
  const _dueDate = Number(dueDate)
  return _closingDate > _dueDate
}
export const cardSchema = z.object({
  id: z.string().uuid(),
  label: z
    .string({ required_error: 'REQUIRED_FIELD_ERROR' })
    .min(3, { message: 'MIN_LENGTH_3_ERROR' })
    .max(30, { message: 'MAX_LENGTH_30_ERROR' }),
  closingDate: z
    .string({ required_error: 'REQUIRED_FIELD_ERROR' })
    .min(2, { message: 'INVALID_DATE_ERROR' })
    .max(2, { message: 'INVALID_DATE_ERROR' })
    .refine(validateDateValue, {
      message: 'DATE_RANGE_INVALID_ERROR',
    }),
  dueDate: z
    .string({ required_error: 'REQUIRED_FIELD_ERROR' })
    .min(2, { message: 'INVALID_DATE_ERROR' })
    .max(2, { message: 'INVALID_DATE_ERROR' })
    .refine(validateDateValue, {
      message: 'DATE_RANGE_INVALID_ERROR',
    }),
  currency: z.enum(CURRENCIES, { required_error: 'REQUIRED_FIELD_ERROR' }),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
})

export type Card = z.infer<typeof cardSchema>

const cardInsertSchema = cardSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  })
  .refine((data) => validateClosingDateAndDueDate(data), {
    message: 'Closing date must be greater than due date',
  })

const cardUpdateSchema = cardSchema
  .pick({
    label: true,
    closingDate: true,
    dueDate: true,
    currency: true,
  })
  .partial()
  .extend({
    id: z.string().uuid(),
  })

export type CardInsertDTO = z.infer<typeof cardInsertSchema>
export type CardUpdateDTO = z.infer<typeof cardUpdateSchema>
export class CardEntity {
  static create(props: Card): Card {
    return cardSchema.parse(props)
  }

  static insert(props: CardInsertDTO): CardInsertDTO {
    return cardInsertSchema.parse(props)
  }

  static update(props: CardUpdateDTO): CardUpdateDTO {
    return cardUpdateSchema.parse(props)
  }
}
