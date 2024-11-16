import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { createToast, createToastHook } from '@gluestack-ui/toast'
import { Text, TouchableOpacity, View } from 'react-native'
import { cssInterop } from 'nativewind'

import { Motion, AnimatePresence } from '@legendapp/motion'

import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates'
import type { VariantProps } from '@gluestack-ui/nativewind-utils'
import { toastStyles } from './style'
import { LucideIcon } from '../lucide-icon'
import { useStyleContext } from '@gluestack-ui/nativewind-utils/withStyleContext'

export const useToastEngine = createToastHook(Motion.View, AnimatePresence)
const SCOPE = 'TOAST'
export const UIToast = createToast({
  Root: withStyleContextAndStates(View, SCOPE),
  Title: Text,
  Description: Text,
})

cssInterop(Motion.View, { className: 'style' })
cssInterop(UIToast, { className: 'style' })
cssInterop(UIToast.Title, { className: 'style' })
cssInterop(UIToast.Description, { className: 'style' })

type RootProps = Omit<ComponentProps<typeof UIToast>, 'context'> & {
  className?: string
} & VariantProps<typeof toastStyles.wrapper>

const Root = forwardRef<ElementRef<typeof UIToast>, RootProps>(
  ({ className, children, action = 'muted', ...rest }, ref) => {
    return (
      <UIToast
        ref={ref}
        className={toastStyles.wrapper({ action, class: className })}
        context={{ action }}
        {...rest}
      >
        {children}
      </UIToast>
    )
  },
)
Root.displayName = 'Root'

type TitleProps = ComponentProps<typeof UIToast.Title> & {
  className?: string
} & VariantProps<typeof toastStyles.title>

const Title = forwardRef<ElementRef<typeof UIToast.Title>, TitleProps>(
  ({ children, className, ...rest }, ref) => {
    const { action: parentAction } = useStyleContext(SCOPE)
    return (
      <UIToast.Title
        ref={ref}
        {...rest}
        className={toastStyles.title({
          parentVariants: {
            action: parentAction,
          },
          class: className,
        })}
      >
        {children}
      </UIToast.Title>
    )
  },
)

Title.displayName = 'Title'

type DescriptionProps = ComponentProps<typeof UIToast.Description> & {
  className?: string
} & VariantProps<typeof toastStyles.description>

const Description = forwardRef<
  ElementRef<typeof UIToast.Description>,
  DescriptionProps
>(({ children, className, ...rest }, ref) => {
  const { action: parentAction } = useStyleContext(SCOPE)

  return (
    <UIToast.Description
      ref={ref}
      {...rest}
      className={toastStyles.description({
        parentVariants: {
          action: parentAction,
        },
        class: className,
      })}
    >
      {children}
    </UIToast.Description>
  )
})
Description.displayName = 'Description'

type CloseButtonProps = Omit<
  ComponentProps<typeof TouchableOpacity>,
  'children'
>
const ButtonClose = forwardRef<
  ElementRef<typeof TouchableOpacity>,
  CloseButtonProps
>(({ className, ...rest }, ref) => {
  const { action: parentAction } = useStyleContext(SCOPE)

  return (
    <TouchableOpacity
      ref={ref}
      className={toastStyles.btnClose({
        parentVariants: {
          action: parentAction,
        },
        class: className,
      })}
      {...rest}
    >
      <LucideIcon
        name="X"
        size={16}
        className={toastStyles.btnCloseIcon({
          parentVariants: {
            action: parentAction,
          },
        })}
      />
    </TouchableOpacity>
  )
})
ButtonClose.displayName = 'ButtonClose'

export const Toast = {
  Root,
  Title,
  Description,
  ButtonClose,
}
