import { tva } from '@gluestack-ui/nativewind-utils/tva'

const wrapper = tva({
  base: 'rounded-md border-2 p-4 shadow-sm',
  variants: {
    isInDeficit: {
      true: 'border-red-400',
      false: 'border-green-400',
    },
  },
})

const balance = tva({
  base: 'text-2xl font-bold',
  variants: { isInDeficit: { true: 'text-red-500', false: 'text-green-500' } },
})

export const reserveStyle = { wrapper, balance }
