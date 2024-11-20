import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useSQLiteContext } from 'expo-sqlite'

import { DrizzleTransactionRepository } from '~/infra/database/drizzle/repositories/drizzle-transactions-repository'
import { Schemas } from '~/infra/database/drizzle/types'

export const useTransactionsRepository = () => {
  const database = useSQLiteContext()

  const db = drizzle(database, { schema: Schemas })

  const transactionRepository = DrizzleTransactionRepository(db)

  return transactionRepository
}
