import { QueryKeys } from '~/infra/cache/query-keys'

import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { Card } from '~/domain/entities/card'
import { useCardsRepository } from '../repositories/use-cards-repository'

type Options = Omit<
  UseQueryOptions<Card[], unknown, Card[]>,
  'queryKey' | 'queryFn'
>

export const useFetchCardsQuery = (options?: Options) => {
  const cardsRepository = useCardsRepository()
  return useQuery({
    queryKey: [QueryKeys.CARDS.FETCH],
    queryFn: () => cardsRepository.findMany(),
    ...options,
  })
}
