import { sql } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { reserve } from './reserve'

export const card = sqliteTable('cards', {
  id: text('id', { length: 36 }).primaryKey().unique(),
  label: text('label').notNull(),
  institution: text('bank'),
  dueDay: text('due_day', { length: 2 }).notNull(),
  currency: text('currency', {
    length: 3,
  }).notNull(),
  createdAt: text('create_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('update_at'),

  //
  reserveId: text('reserve_id').references(() => reserve.id),
})
