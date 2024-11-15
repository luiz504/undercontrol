import { tva } from '@gluestack-ui/nativewind-utils/tva'

const root = tva({
  base: 'h-12 flex-grow flex-row items-center justify-between rounded-md border bg-zinc-900 px-3',
  variants: {
    focused: {
      true: 'border-zinc-400',
      false: 'border-zinc-700',
    },
  },
})

const text = tva({
  base: 'text-base leading-none',
  variants: {
    isPlaceholder: {
      true: 'text-zinc-400',
      false: 'text-zinc-50',
    },
  },
})

export const selectStyle = { root, text }
