import { tva } from '@gluestack-ui/nativewind-utils/tva'

const inputContainer = tva({ base: 'flex-grow gap-1' })

const input = tva({
  base: [
    'h-12 flex-grow rounded-md bg-transparent px-3',
    'text-base text-white',
    'border',
  ],
  variants: {
    isFocused: {
      true: 'border-black-ternary',
      false: 'border-black-secondary',
    },
    isPassword: {
      true: 'pr-14',
    },
  },
})

const inputPWButton = tva({
  base: 'absolute right-0.5 top-0.5 rounded-md p-2',
})

export const inputStyle = {
  input,
  inputContainer,
  inputPWButton,
}
