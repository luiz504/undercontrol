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
const cardSchema = z.object({
  id: z.string().uuid(),
  label: z.string().min(3).max(30),
  institution: z.string().max(30).optional().nullable(),
  closingDate: z.string().min(2).max(2).refine(validateDateValue, {
    message: 'Must be a number between 01 and 28',
  }),
  dueDate: z.string().min(2).max(2).refine(validateDateValue, {
    message: 'Must be a number between 01 and 28',
  }),
  currency: z.enum(CURRENCIES),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
  reserveId: z.string().uuid().optional().nullable(),
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
    institution: true,
    reserveId: true,
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
