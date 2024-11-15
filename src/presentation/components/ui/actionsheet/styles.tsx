import { tva } from '@gluestack-ui/nativewind-utils/tva'

const root = tva({ base: 'h-full w-full' })

const overlay = tva({
  base: 'absolute bottom-0 left-0 right-0 top-0 bg-grey',
})

const content = tva({
  base: [
    'rounded-tl-3xl rounded-tr-3xl',
    'border-x-2 border-t-2',
    'border-black-secondary bg-black',
    'items-center p-5 pt-2 shadow-lg',
  ],
})

const item = tva({
  base: [
    'w-full flex-row items-center gap-2 rounded-sm p-3',
    'data-[disabled=true]:opacity-40',
    'active:bg-purple-transparent',
  ],
  variants: {
    selected: {
      true: 'bg-white-light',
    },
  },
})

const dragIndicatorWrapper = tva({
  base: 'w-full items-center py-1',
})
const dragIndicator = tva({
  base: 'h-1 w-16 rounded-full bg-black-ternary',
})

export const actionsheetStyles = {
  root,
  overlay,
  content,
  item,
  dragIndicatorWrapper,
  dragIndicator,
}
