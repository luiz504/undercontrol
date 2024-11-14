import { sql } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const reserve = sqliteTable('reserves', {
  id: text('id', { length: 36 }).primaryKey().unique(),
  label: text('label').notNull(),
  institution: text('bank'),
  currency: text('currency', {
    length: 3,
  }).notNull(),
  createdAt: text('create_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('update_at'),
})
