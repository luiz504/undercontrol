import { tva } from '@gluestack-ui/nativewind-utils/tva'

const section = tva({ base: 'w-full' })
const label = tva({ base: 'mb-2 text-lg font-medium text-zinc-400' })
const error = tva({ base: 'text-sm text-red-500' })

export const formStyle = { section, label, error }
