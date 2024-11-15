import { tva } from '@gluestack-ui/nativewind-utils/tva'

const button = tva({
  base: [
    'flex-row items-center justify-center',
    'group/button gap-2 rounded-md border',
    'data-[disabled=true]:opacity-40',
  ],
  variants: {
    theme: {
      primary: '',
      neutral: '',
    },
    variant: {
      link: 'px-0',
      outline: '',
      solid: '',
    },
    size: {
      md: 'h-12 px-3',
    },
  },
  compoundVariants: [
    {
      theme: 'primary',
      variant: 'solid',
      class: 'border-purple bg-purple',
    },
    {
      theme: 'primary',
      variant: 'link',
      class: 'border-transparent bg-transparent',
    },
    {
      theme: 'primary',
      variant: 'outline',
      class: 'border-purple bg-transparent',
    },
    {
      theme: 'neutral',
      variant: 'solid',
      class: 'border-white bg-white',
    },
    {
      theme: 'neutral',
      variant: 'link',
      class: 'border-transparent bg-transparent',
    },
    {
      theme: 'neutral',
      variant: 'outline',
      class: 'border-white bg-transparent',
    },
  ],
})

const text = tva({
  base: 'font-semibold',
  parentVariants: {
    theme: {
      primary: '',
      neutral: '',
    },
    variant: {
      link: '',
      outline: '',
      solid: '',
    },
    size: {
      md: 'text-base',
    },
  },
  parentCompoundVariants: [
    {
      variant: 'solid',
      theme: 'primary',
      class: 'text-white',
    },
    {
      variant: 'solid',
      theme: 'neutral',
      class: 'text-black',
    },
    {
      variant: 'outline',
      theme: 'primary',
      class: 'text-purple',
    },
    {
      variant: 'outline',
      theme: 'neutral',
      class: 'text-white',
    },
    {
      variant: 'link',
      theme: 'primary',
      class: 'text-purple',
    },
    {
      variant: 'link',
      theme: 'neutral',
      class: 'text-white',
    },
  ],
})

const icon = tva({
  base: 'fill-none',
  parentVariants: {
    variant: {
      link: '',
      outline: '',
      solid: '',
    },
    size: {
      md: 'size-6',
    },
    theme: {
      primary: '',
      neutral: '',
    },
  },
  parentCompoundVariants: [
    {
      variant: 'solid',
      theme: 'primary',
      class: 'text-white',
    },
    {
      variant: 'solid',
      theme: 'neutral',
      class: 'text-white',
    },
    {
      variant: 'outline',
      theme: 'primary',
      class: 'text-purple',
    },
    {
      variant: 'outline',
      theme: 'neutral',
      class: 'text-zinc-500',
    },
    {
      variant: 'link',
      theme: 'primary',
      class: 'text-purple',
    },
    {
      variant: 'link',
      theme: 'neutral',
      class: 'text-zinc-500',
    },
  ],
})

export const buttonStyles = {
  button,
  text,
  icon,
}
