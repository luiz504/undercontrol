export const CURRENCIES = ['BRL', 'USD', 'EUR', 'GBP', 'ARS'] as const

export type Currency = (typeof CURRENCIES)[number]
