import { Card } from '../entities/card'
import { Transaction } from '../entities/transaction'

export type TransactionWithCard = Transaction & {
  card: Pick<Card, 'label' | 'id'>
}
