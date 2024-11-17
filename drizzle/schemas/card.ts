import { sql } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const card = sqliteTable('cards', {
  id: text('id', { length: 36 }).primaryKey().unique(),
  label: text('label').unique('card_label_unique').notNull(),
  closingDate: text('closing_date', { length: 2 }).notNull(),
  dueDate: text('due_date', { length: 2 }).notNull(),
  currency: text('currency', {
    length: 3,
  }).notNull(),
  createdAt: text('create_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('update_at'),
})
