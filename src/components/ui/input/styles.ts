import { tva } from '@gluestack-ui/nativewind-utils/tva'

const wrapper = tva({ base: 'w-full' })
const label = tva({ base: 'mb-2 text-lg font-medium text-zinc-400' })
const error = tva({ base: 'text-sm text-red-500' })
const input = tva({
  base: [
    'h-12 flex-grow rounded-md bg-zinc-900 px-3',
    'text-zinc-200',
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
  wrapper,
  label,
  error,
  input,
  inputContainer,
  inputPWButton,
}
