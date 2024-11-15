import { tva } from '@gluestack-ui/nativewind-utils/tva'

const section = tva({ base: 'w-full' })
const label = tva({ base: 'mb-2 font-medium text-white' })
const error = tva({ base: 'text-sm leading-5 text-red' })

export const formStyle = { section, label, error }
