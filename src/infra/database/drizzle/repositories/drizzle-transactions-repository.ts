import { DrizzleDatabase, Schemas } from '../types'

import { TransactionsRepository } from '~/domain/repositories/transactions-repository'
import {
  Transaction,
  TransactionEntity,
  TransactionInsertDTO,
} from '~/domain/entities/transaction'
import { DrizzleTransactionMapper } from '../mappers/drizzle-transaction-mapper'
import { eq } from 'drizzle-orm'
import { TransactionWithCard } from '~/domain/composites/transaction-with-card'
import { DrizzleTransactionWithCardMapper } from '../mappers/drizzle-transaction-with-card-mapper'

export const DrizzleTransactionRepository = (
  database: DrizzleDatabase,
): TransactionsRepository => {
  const insert: TransactionsRepository['insert'] = async (
    params: TransactionInsertDTO,
  ): Promise<void> => {
    const values = TransactionEntity.insert(params)

    await database
      .insert(Schemas.transaction)
      .values(DrizzleTransactionMapper.toPersistence(values))
  }

  const findManyByCardId: TransactionsRepository['findManyByCardId'] = async (
    cardId,
  ): Promise<Transaction[]> => {
    const items = await database.query.transaction.findMany({
      limit: 30,
      where: eq(Schemas.transaction.cardId, cardId),
    })
    return items.map(DrizzleTransactionMapper.toDomain)
  }

  const findMany: TransactionsRepository['findMany'] = async (): Promise<
    TransactionWithCard[]
  > => {
    const items = await database.query.transaction.findMany({
      with: { card: true },
      limit: 30,
    })

    return items.map(DrizzleTransactionWithCardMapper.toDomain)
  }

  return {
    findMany,
    insert,
    findManyByCardId,
  }
}
