import { InferSelectModel } from 'drizzle-orm'

import { Schemas } from '../types'
import { TransactionWithCard } from '~/domain/composites/transaction-with-card'

export class DrizzleTransactionWithCardMapper {
  static toDomain(
    raw: InferSelectModel<typeof Schemas.transaction> & {
      card: InferSelectModel<typeof Schemas.card>
    },
  ): TransactionWithCard {
    return {
      id: raw.id,
      description: raw.description,
      installments: raw.installments,
      amount: raw.amount,
      purchaseDate: new Date(raw.purchaseDate),
      cardId: raw.cardId,
      createdAt: new Date(raw.createdAt),
      updatedAt: raw.updatedAt ? new Date(raw.updatedAt) : null,
      card: {
        id: raw.cardId,
        label: raw.card.label,
      },
    }
  }
}
