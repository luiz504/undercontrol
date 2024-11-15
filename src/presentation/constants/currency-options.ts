import { Option } from '~/presentation/components/ui'
import { Currency } from '~/domain/entities/shared-properties'

const currenciesWithLabel: Record<
  Currency,
  { value: Currency; label: string }
> = {
  ARS: { value: 'ARS', label: 'Peso Argentino' },
  BRL: { value: 'BRL', label: 'Real' },
  EUR: { value: 'EUR', label: 'Euro' },
  GBP: { value: 'GBP', label: 'Libra' },
  USD: { value: 'USD', label: 'Dólar' },
}
export const currencyOptions: Option[] = Object.values(currenciesWithLabel)
