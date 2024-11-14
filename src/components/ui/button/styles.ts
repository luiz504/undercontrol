import { tva } from '@gluestack-ui/nativewind-utils/tva'

const button = tva({
  base: 'group/button flex-row items-center justify-center gap-2 rounded data-[disabled=true]:opacity-40',
  variants: {
    action: {
      primary: '',
      neutral: '',
    },
    variant: {
      link: 'px-0',
      outline: '',
      solid: '',
    },
    size: {
      'md-square': 'aspect-square h-12',
      md: 'h-12 px-3',
    },
  },
  compoundVariants: [
    {
      action: 'primary',
      variant: 'solid',
      class: 'bg-purple-500',
    },
    {
      action: 'primary',
      variant: 'link',
      class: 'bg-transparent',
    },
    {
      action: 'primary',
      variant: 'outline',
      class: 'bg-transparent',
    },
    {
      action: 'neutral',
      variant: 'solid',
      class: 'bg-zinc-500',
    },
    {
      action: 'neutral',
      variant: 'link',
      class: 'bg-transparent',
    },
    {
      action: 'neutral',
      variant: 'outline',
      class: 'bg-transparent',
    },
  ],
})

const text = tva({
  base: 'font-semibold',
  parentVariants: {
    action: {
      primary: 'text-red-500',
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
      action: 'primary',
      class: 'text-white',
    },
    {
      variant: 'solid',
      action: 'neutral',
      class: 'text-white',
    },
    {
      variant: 'outline',
      action: 'primary',
      class: 'text-purple-500',
    },
    {
      variant: 'outline',
      action: 'neutral',
      class: 'text-zinc-500',
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
      xs: 'size-3.5',
      sm: 'size-4',
      md: 'size-[18]',
      lg: 'size-6',
      xl: 'size-8',
    },
    action: {
      primary: '',
      neutral: '',
    },
  },
  parentCompoundVariants: [
    {
      variant: 'solid',
      action: 'primary',
      class: 'text-white',
    },
    {
      variant: 'solid',
      action: 'neutral',
      class: 'text-white',
    },
    {
      variant: 'outline',
      action: 'primary',
      class: 'text-purple-500',
    },
    {
      variant: 'outline',
      action: 'neutral',
      class: 'text-zinc-500',
    },
  ],
})

const group = tva({
  base: '',
  variants: {
    space: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-3',
    },
  },
})

export const ButtonStyles = {
  button,
  text,
  icon,
  group,
}
