import { useQueryClient } from '@tanstack/react-query'
import { QueryKeys } from '~/infra/cache/query-keys'

export const useQueryInvalidator = () => {
  const queryClient = useQueryClient()

  const invalidateFetchTransactionsByCardId = (cardId: string) =>
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.TRANSACTIONS.FETCH_BY_CARD_ID(cardId)],
    })
  const invalidateFetchCards = () =>
    queryClient.invalidateQueries({ queryKey: [QueryKeys.CARDS.FETCH] })
  return {
    invalidateFetchCards,
    invalidateFetchTransactionsByCardId,
  }
}
