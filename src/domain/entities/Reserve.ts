import { z } from 'zod'
export const supportedCurrencies = ['BRL', 'USD', 'EUR', 'GBP', 'ARS'] as const

export const reserveSchema = z.object({
  id: z.string().uuid(),
  label: z.string(),
  bank: z.string().optional(),
  balance: z.number().int(),
  currency: z.enum(supportedCurrencies),
  //   created_at: z.date(),
  //   updated_at: z.date(),
})

export type Reserve = z.infer<typeof reserveSchema>
export class ReserveEntity {
  static create(props: Reserve): Reserve {
    return reserveSchema.parse(props)
  }
}
