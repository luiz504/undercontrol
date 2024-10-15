import { z } from 'zod'

const cardSchema = z.object({
  id: z.string().uuid(),
  label: z.string(),
  bank: z.string().optional(),
  //   created_at: z.date(),
  //   updated_at: z.date(),
})

export type Card = z.infer<typeof cardSchema>
export class CardEntity {
  static create(props: Card): Card {
    return cardSchema.parse(props)
  }
}
