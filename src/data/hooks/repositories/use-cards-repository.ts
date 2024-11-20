import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useSQLiteContext } from 'expo-sqlite'

import { DrizzleCardRepository } from '~/infra/database/drizzle/repositories/drizzle-cards-repository'
import { Schemas } from '~/infra/database/drizzle/types'

export const useCardsRepository = () => {
  const database = useSQLiteContext()

  const db = drizzle(database, { schema: Schemas })

  const cardRepository = DrizzleCardRepository(db)

  return cardRepository
}
