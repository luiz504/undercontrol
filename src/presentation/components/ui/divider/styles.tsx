import { tva } from '@gluestack-ui/nativewind-utils/tva'

export const dividerStyle = tva({
  base: 'bg-zinc-700',
  variants: {
    orientation: {
      vertical: 'h-full w-px',
      horizontal: 'h-px w-full',
    },
  },
})
