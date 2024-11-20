import { Transaction, TransactionInsertDTO } from '../entities/Transaction'

export interface TransactionsRepository {
  insert(props: TransactionInsertDTO): Promise<void>
  findManyByCardId(cardId: string): Promise<Transaction[]>
}
