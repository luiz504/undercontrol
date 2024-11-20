import { QueryKeys } from '~/infra/cache/query-keys'

import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { useTransactionsRepository } from '../repositories/user-transactions-repository'
import { Transaction } from '~/domain/entities/Transaction'

type Options = Omit<
  UseQueryOptions<Transaction[], unknown, Transaction[]>,
  'queryKey' | 'queryFn'
>

export const useFetchCardTransactionsQuery = (
  cardId: string,
  options?: Options,
) => {
  const transactionsRepository = useTransactionsRepository()
  return useQuery({
    queryKey: [QueryKeys.TRANSACTIONS.FETCH_BY_CARD_ID(cardId)],
    queryFn: () => transactionsRepository.findManyByCardId(cardId),
    ...options,
  })
}
