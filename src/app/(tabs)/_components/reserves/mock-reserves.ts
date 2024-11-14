import { Reserve } from '~/domain/entities/Reserve'

export const mockReserves: Reserve[] = [
  {
    id: '1',
    label: 'Reserve 1',
    institution: 'Bank 1',
    createdAt: new Date(),
    updatedAt: null,
    currency: 'BRL',
  },
  {
    id: '2',
    label: 'Reserve 2',
    institution: 'Bank 2',
    createdAt: new Date(),
    updatedAt: null,
    currency: 'USD',
  },
  {
    id: '3',
    label: 'Reserve 3',
    institution: 'Bank 3',
    createdAt: new Date(),
    updatedAt: null,
    currency: 'EUR',
  },
  {
    id: '4',
    label: 'Reserve 4',
    institution: 'Bank 4',
    createdAt: new Date(),
    updatedAt: null,
    currency: 'ARS',
  },
  {
    id: '5',
    label: 'Reserve 5',
    institution: 'Bank 5',
    createdAt: new Date(),
    updatedAt: null,
    currency: 'GBP',
  },
]
