import { ComponentProps, ElementRef, FC, forwardRef, ReactNode } from 'react'
import { VStack } from '../vstack'

import { Text } from '../text'
import { LucideIcon } from '../lucide-icon'
import { useTranslation } from 'react-i18next'
import { cn } from '@gluestack-ui/nativewind-utils/cn'
import { HStack } from '../hstack'

const Root = VStack

const VGroup = forwardRef<
  ElementRef<typeof VStack>,
  ComponentProps<typeof VStack>
>(({ children, className, ...rest }, ref) => {
  return (
    <VStack className={cn('gap-2', className)} {...rest} ref={ref}>
      {children}
    </VStack>
  )
})
VGroup.displayName = 'VGroup'

const HGroup = forwardRef<
  ElementRef<typeof HStack>,
  ComponentProps<typeof HStack>
>(({ children, className, ...rest }, ref) => {
  return (
    <HStack className={cn('gap-2', className)} {...rest} ref={ref}>
      {children}
    </HStack>
  )
})
HGroup.displayName = 'HGroup'

type TextProps = Omit<ComponentProps<typeof Text>, 'children'> & {
  children: ReactNode
}
const Label: FC<TextProps> = ({ children, className, ...rest }) => {
  return (
    <Text className={cn('font-label font-medium', className)} {...rest}>
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
      <Text className={cn('text-sm leading-5 text-red', className)} {...rest}>
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

export const Form = { Root, VGroup, HGroup, Label, Error }
