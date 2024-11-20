import { sql } from 'drizzle-orm'

import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { card } from './card'

export const transaction = sqliteTable('transactions', {
  id: text('id', { length: 36 }).primaryKey().unique(),
  description: text('description'),
  installments: int('installments').notNull(),
  amount: int('amount').notNull(),

  purchaseDate: text('purchase_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  createdAt: text('create_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('update_at').$onUpdate(() => sql`CURRENT_TIMESTAMP`),

  cardId: text('card_id')
    .references(() => card.id)
    .notNull(),
})
