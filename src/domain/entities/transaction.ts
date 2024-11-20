import { z } from 'zod'

import * as Schemas from '~/drizzle/schemas'
import { InferSelectModel } from 'drizzle-orm'

export const transactionSchema = z.object({
  id: z.string().uuid(),
  description: z.string().optional().nullable(),
  installments: z.number().int().min(1).max(99),
  amount: z.number().int().min(1),
  purchaseDate: z.date(),
  cardId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
})

export const transactionInsertSchema = transactionSchema.pick({
  description: true,
  amount: true,
  installments: true,
  purchaseDate: true,
  cardId: true,
})

export type Transaction = z.infer<typeof transactionSchema>
export type TransactionInsertDTO = z.infer<typeof transactionInsertSchema>
export class TransactionEntity {
  static create(props: Transaction): Transaction {
    return transactionSchema.parse(props)
  }

  static toDomain(
    raw: InferSelectModel<typeof Schemas.transaction>,
  ): Transaction {
    return transactionSchema.parse({
      ...raw,
      created_at: new Date(raw.createdAt),
      updated_at: raw.updatedAt ? new Date(raw.updatedAt) : null,
    })
  }

  static insert(props: TransactionInsertDTO): TransactionInsertDTO {
    return transactionInsertSchema.parse(props)
  }
}
