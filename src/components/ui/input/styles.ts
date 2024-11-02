import { tva } from '@gluestack-ui/nativewind-utils/tva'

const input = tva({
  base: [
    'h-12 flex-grow rounded-md bg-zinc-900 px-3',
    'text-base text-zinc-200',
    'border',
  ],
  variants: {
    isFocused: {
      true: 'border-zinc-400',
      false: 'border-zinc-700',
    },
    isPassword: {
      true: 'pr-14',
    },
  },
})
const inputContainer = tva({ base: 'w-full gap-1' })
const inputPWButton = tva({
  base: 'absolute right-0.5 top-0.5 rounded-md p-2',
})

export const inputStyle = {
  input,
  inputContainer,
  inputPWButton,
}
