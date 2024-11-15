import { tva } from '@gluestack-ui/nativewind-utils/tva'

const root = tva({
  base: 'h-12 flex-grow flex-row items-center justify-between rounded-md border bg-transparent px-3',
  variants: {
    focused: {
      true: 'border-black-ternary',
      false: 'border-black-secondary',
    },
  },
})

const text = tva({
  base: 'text-base leading-none',
  variants: {
    isPlaceholder: {
      true: 'text-glowColor',
      false: 'text-white',
    },
  },
})

export const selectStyle = { root, text }
