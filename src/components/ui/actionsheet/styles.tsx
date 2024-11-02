import { tva } from '@gluestack-ui/nativewind-utils/tva'

const root = tva({ base: 'h-full w-full' })

const overlay = tva({
  base: 'absolute bottom-0 left-0 right-0 top-0 bg-zinc-600 opacity-40',
})

const content = tva({
  base: 'items-center rounded-tl-3xl rounded-tr-3xl border-2 border-zinc-700 bg-zinc-900 p-5 pt-2 shadow-lg',
})

const item = tva({
  base: 'hover:bg-background-50 active:bg-background-100 data-[focus=true]:bg-background-100 w-full flex-row items-center gap-2 rounded-sm p-3 data-[disabled=true]:opacity-40',
})

const dragIndicatorWrapper = tva({
  base: 'w-full items-center py-1',
})
const dragIndicator = tva({
  base: 'h-1 w-16 rounded-full bg-zinc-400',
})

export const actionsheetStyles = {
  root,
  overlay,
  content,
  item,
  dragIndicatorWrapper,
  dragIndicator,
}
