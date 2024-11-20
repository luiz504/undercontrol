import { relations, sql } from 'drizzle-orm'
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

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
  updatedAt: text('update_at').$onUpdate(() => sql`CURRENT_TIMESTAMP`),
})

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

export const cardRelations = relations(card, ({ many }) => ({
  transactions: many(transaction),
}))

export const transactionRelations = relations(transaction, ({ one }) => ({
  card: one(card, {
    fields: [transaction.cardId],
    references: [card.id],
  }),
}))
