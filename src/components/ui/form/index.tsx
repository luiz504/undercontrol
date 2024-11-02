import { ComponentProps, FC, ReactNode } from 'react'
import { VStack } from '../vstack'
import { formStyle } from './styles'
import { Text } from '../text'

const Root = VStack
type SectionProps = Omit<ComponentProps<typeof VStack>, 'children'> & {
  children: ReactNode
}
const Section: FC<SectionProps> = ({ children, className, ...rest }) => {
  return (
    <VStack className={formStyle.section({ className })} {...rest}>
      {children}
    </VStack>
  )
}

type TextProps = Omit<ComponentProps<typeof Text>, 'children'> & {
  children: ReactNode
}
const Label: FC<TextProps> = ({ children, className, ...rest }) => {
  return (
    <Text className={formStyle.label({ className })} {...rest}>
      {children}
    </Text>
  )
}
const Error: FC<TextProps> = ({ children, className, ...rest }) => {
  return (
    <Text className={formStyle.error({ className })} {...rest}>
      {children}
    </Text>
  )
}

export const Form = { Root, Section, Label, Error }
