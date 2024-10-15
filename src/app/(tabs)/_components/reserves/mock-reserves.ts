import { Reserve } from '~/domain/entities/Reserve'

export const mockReserves: Reserve[] = [
  {
    id: '1',
    label: 'Reserve 1',
    bank: 'Bank 1',
    balance: 1000,
    currency: 'BRL',
  },
  {
    id: '2',
    label: 'Reserve 2',
    bank: 'Bank 2',
    balance: -2000,
    currency: 'USD',
  },
  {
    id: '3',
    label: 'Reserve 3',
    bank: 'Bank 3',
    balance: 3000,
    currency: 'EUR',
  },
  {
    id: '4',
    label: 'Reserve 4',
    bank: 'Bank 4',
    balance: 4000,
    currency: 'ARS',
  },
  {
    id: '5',
    label: 'Reserve 5',
    bank: 'Bank 5',
    balance: 5000,
    currency: 'GBP',
  },
]
