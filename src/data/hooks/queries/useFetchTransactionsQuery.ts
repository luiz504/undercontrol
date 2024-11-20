import { QueryKeys } from '~/infra/cache/query-keys'

import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { useTransactionsRepository } from '../repositories/user-transactions-repository'

import { TransactionWithCard } from '~/domain/composites/transaction-with-card'

type Options = Omit<
  UseQueryOptions<TransactionWithCard[], unknown, TransactionWithCard[]>,
  'queryKey' | 'queryFn'
>

export const useFetchTransactionsQuery = (options?: Options) => {
  const transactionsRepository = useTransactionsRepository()
  return useQuery({
    queryKey: [QueryKeys.TRANSACTIONS.FETCH],
    queryFn: () => transactionsRepository.findMany(),
    ...options,
  })
}
