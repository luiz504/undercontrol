import { useCardsRepository } from '../repositories/use-cards-repository'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { Card } from '~/domain/entities/card'
import { QueryKeys } from '~/infra/cache/query-keys'

type Options = Omit<
  UseQueryOptions<Card | null, unknown, Card | null>,
  'queryKey' | 'queryFn'
>
type Params = {
  cardId: string
  onSuccess?: (card: Card | null) => void
  onError?: (err: unknown) => void
}
export const useGetCardByIdQuery = (
  { cardId, onSuccess, onError }: Params,
  options?: Options,
) => {
  const cardsRepository = useCardsRepository()
  const query = useQuery({
    queryKey: [QueryKeys.CARDS.GET_BY_ID(cardId)],
    queryFn: async () => {
      try {
        const response = await cardsRepository.findById(cardId)
        onSuccess?.(response)
        return response
      } catch (err) {
        onError?.(err)
        throw err
      }
    },
    ...options,
  })
  return query
}
