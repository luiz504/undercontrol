import { TransactionWithCard } from '../composites/transaction-with-card'
import { Transaction, TransactionInsertDTO } from '../entities/transaction'

export interface TransactionsRepository {
  insert(props: TransactionInsertDTO): Promise<void>
  findManyByCardId(cardId: string): Promise<Transaction[]>
  findMany(): Promise<TransactionWithCard[]>
}
