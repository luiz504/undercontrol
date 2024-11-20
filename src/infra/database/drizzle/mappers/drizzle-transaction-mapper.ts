import { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { randomUUID } from 'expo-crypto'

import {
  TransactionEntity,
  TransactionInsertDTO,
} from '~/domain/entities/transaction'
import { Schemas } from '../types'

export class DrizzleTransactionMapper {
  static toDomain(raw: InferSelectModel<typeof Schemas.transaction>) {
    return TransactionEntity.create({
      id: raw.id,
      description: raw.description,
      installments: raw.installments,
      amount: raw.amount,
      purchaseDate: new Date(raw.purchaseDate),
      cardId: raw.cardId,
      createdAt: new Date(raw.createdAt),
      updatedAt: raw.updatedAt ? new Date(raw.updatedAt) : null,
    })
  }

  static toPersistence(
    props: TransactionInsertDTO,
  ): InferInsertModel<typeof Schemas.transaction> {
    return {
      id: randomUUID(),
      description: props.description,
      installments: props.installments,
      purchaseDate: props.purchaseDate.toISOString(),
      amount: props.amount,
      cardId: props.cardId,
    }
  }
}
