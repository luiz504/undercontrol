import { tva } from '@gluestack-ui/nativewind-utils/tva'

const wrapper = tva({
  base: 'm-1 flex min-h-[5.0625rem] w-[25rem] justify-center gap-1 rounded-md p-4 shadow-lg sm:max-w-[90vw]',
  variants: {
    action: {
      error: 'bg-red',
      warning: 'bg-orange',
      success: 'bg-green',
      info: 'bg-cyan',
      muted: 'bg-black-secondary',
    },
  },
})

const title = tva({
  base: 'mr-2 text-base font-medium',
  parentVariants: {
    action: {
      error: 'text-grey',
      warning: 'text-grey',
      success: 'text-grey',
      info: 'text-grey',
      muted: 'text-white',
    },
  },
})

const description = tva({
  base: 'text-sm font-normal',
  parentVariants: {
    action: {
      error: 'text-grey',
      warning: 'text-grey',
      success: 'text-grey',
      info: 'text-grey',
      muted: 'text-white',
    },
  },
})

const btnClose = tva({
  base: 'absolute right-1 top-1 rounded bg-cyan-light p-1',
  parentVariants: {
    action: {
      error: 'bg-red-light',
      warning: 'bg-orange-light',
      success: 'bg-green-light',
      info: 'bg-cyan-light',
      muted: 'bg-grey-light',
    },
  },
})

const btnCloseIcon = tva({
  parentVariants: {
    action: {
      error: 'text-grey',
      warning: 'text-grey',
      success: 'text-grey',
      info: 'text-grey',
      muted: 'text-white',
    },
  },
})

export const toastStyles = {
  wrapper,
  title,
  description,
  btnClose,
  btnCloseIcon,
}
