export const QueryKeys = {
  CARDS: {
    FETCH: ['CARDS', 'FETCH'],
    GET_BY_ID: (id: string) => ['CARDS', 'GET_BY_ID', id],
  },
  TRANSACTIONS: {
    GET_BY_CARD_ID: (id: string) => ['TRANSACTIONS', 'GET_BY_CARD_ID', id],
  },
}
