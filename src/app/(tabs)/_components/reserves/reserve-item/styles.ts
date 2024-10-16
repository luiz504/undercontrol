import { tva } from '@gluestack-ui/nativewind-utils/tva'

const wrapper = tva({
  base: 'rounded-md border-2 border-slate-100 p-4 shadow-sm',
})

const balance = tva({
  base: 'text-2xl font-bold',
  variants: { isInDeficit: { true: 'text-red-500', false: 'text-green-500' } },
})

export const reserveStyle = { wrapper, balance }
