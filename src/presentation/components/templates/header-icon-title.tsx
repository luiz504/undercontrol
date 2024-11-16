import { ComponentProps, FC, ReactNode } from 'react'
import { Heading, HStack } from '../ui'

type Props = {
  icon: ReactNode
  title: string
} & Omit<ComponentProps<typeof HStack>, 'children'>
export const HeaderIconTitle: FC<Props> = ({ title, icon }) => {
  return (
    <HStack className="items-center justify-center gap-3 py-4">
      {icon}
      <Heading>{title}</Heading>
    </HStack>
  )
}
