import { ComponentProps, FC, ReactNode } from 'react'
import { VStack } from '../vstack'
import { formStyle } from './styles'
import { Text } from '../text'
import { LucideIcon } from '../lucide-icon'
import { useTranslation } from 'react-i18next'

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

type ErrorProps = Omit<ComponentProps<typeof Text>, 'children'> & {
  error?: string
}
const Error: FC<ErrorProps> = ({ error, className, ...rest }) => {
  const { t } = useTranslation()
  return (
    error && (
      <Text className={formStyle.error({ className })} {...rest}>
        <LucideIcon
          name="CircleAlert"
          size={14}
          className="mr-1 translate-y-[2px] text-center text-red"
        />{' '}
        {t(error)}
      </Text>
    )
  )
}

export const Form = { Root, Section, Label, Error }
