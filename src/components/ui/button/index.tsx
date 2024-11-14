'use client'
import React, {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  forwardRef,
  useMemo,
} from 'react'
import { createButton } from '@gluestack-ui/button'
import { Svg } from 'react-native-svg'
import type { PressableProps } from 'react-native'

import { useStyleContext } from '@gluestack-ui/nativewind-utils/withStyleContext'
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates'
import { cssInterop } from 'nativewind'
import { withStates } from '@gluestack-ui/nativewind-utils/withStates'
import { ActivityIndicator, Pressable, Text, View } from 'react-native'
import type { VariantProps } from '@gluestack-ui/nativewind-utils'
import { ButtonStyles } from './styles'

const SCOPE = 'BUTTON'
const ButtonWrapper = forwardRef<ElementRef<typeof Pressable>, PressableProps>(
  ({ ...rest }, ref) => {
    return <Pressable {...rest} ref={ref} />
  },
)

ButtonWrapper.displayName = 'ButtonWrapper'

type IPrimitiveIcon = ComponentPropsWithoutRef<typeof Svg> & {
  height?: number | string
  width?: number | string
  fill?: string
  color?: string
  size?: number | string
  stroke?: string
  as?: ElementType
  className?: string
  classNameColor?: string
}

const PrimitiveIcon = forwardRef<ElementRef<typeof Svg>, IPrimitiveIcon>(
  (
    {
      height,
      width,
      fill,
      color,
      classNameColor,
      size,
      stroke = 'currentColor',
      as: AsComp,
      ...rest
    },
    ref,
  ) => {
    color = color ?? classNameColor
    const sizeProps = useMemo(() => {
      if (size) return { size }
      if (height && width) return { height, width }
      if (height) return { height }
      if (width) return { width }
      return {}
    }, [size, height, width])

    let colorProps = {}
    if (fill) {
      colorProps = { ...colorProps, fill }
    }
    if (stroke !== 'currentColor') {
      colorProps = { ...colorProps, stroke }
    } else if (stroke === 'currentColor' && color !== undefined) {
      colorProps = { ...colorProps, stroke: color }
    }

    if (AsComp) {
      return <AsComp ref={ref} {...rest} {...sizeProps} {...colorProps} />
    }
    return (
      <Svg ref={ref} height={height} width={width} {...colorProps} {...rest} />
    )
  },
)

PrimitiveIcon.displayName = 'PrimitiveIcon'

const Root = withStyleContextAndStates(ButtonWrapper, SCOPE)

const UIButton = createButton({
  Root,
  Text,
  Group: View,
  Spinner: ActivityIndicator,
  Icon: withStates(PrimitiveIcon),
})

cssInterop(Root, { className: 'style' })
cssInterop(UIButton.Text, { className: 'style' })
cssInterop(UIButton.Group, { className: 'style' })
cssInterop(UIButton.Spinner, {
  className: { target: 'style', nativeStyleToProp: { color: true } },
})

cssInterop(PrimitiveIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      // @ts-expect-error --type mismatch
      fill: true,
      color: 'classNameColor',
      stroke: true,
    },
  },
})

type ButtonProps = Omit<ComponentPropsWithoutRef<typeof UIButton>, 'context'> &
  VariantProps<typeof ButtonStyles.button> & { className?: string }

const Button = forwardRef<ElementRef<typeof UIButton>, ButtonProps>(
  (
    { className, variant = 'solid', size = 'md', action = 'primary', ...rest },
    ref,
  ) => {
    return (
      <UIButton
        ref={ref}
        {...rest}
        className={ButtonStyles.button({
          variant,
          size,
          action,
          class: className,
        })}
        context={{ variant, size, action }}
      />
    )
  },
)

type ButtonTextProps = ComponentPropsWithoutRef<typeof UIButton.Text> &
  VariantProps<typeof ButtonStyles.text> & { className?: string }

const ButtonText = forwardRef<
  ElementRef<typeof UIButton.Text>,
  ButtonTextProps
>(({ className, variant, size, action, ...rest }, ref) => {
  const {
    variant: parentVariant,
    size: parentSize,
    action: parentAction,
  } = useStyleContext(SCOPE)

  return (
    <UIButton.Text
      ref={ref}
      {...rest}
      className={ButtonStyles.text({
        parentVariants: {
          variant: parentVariant,
          size: parentSize,
          action: parentAction,
        },
        variant,
        size,
        action,
        class: className,
      })}
    />
  )
})

const ButtonSpinner = UIButton.Spinner

type ButtonIcon = ComponentPropsWithoutRef<typeof UIButton.Icon> &
  VariantProps<typeof ButtonStyles.icon> & {
    className?: string | undefined
    as?: ElementType
  }

const ButtonIcon = forwardRef<ElementRef<typeof UIButton.Icon>, ButtonIcon>(
  ({ className, size, ...rest }, ref) => {
    const {
      variant: parentVariant,
      size: parentSize,
      action: parentAction,
    } = useStyleContext(SCOPE)

    if (typeof size === 'number') {
      return (
        <UIButton.Icon
          ref={ref}
          {...rest}
          className={ButtonStyles.icon({ class: className })}
          size={size}
        />
      )
    } else if (
      (rest.height !== undefined || rest.width !== undefined) &&
      size === undefined
    ) {
      return (
        <UIButton.Icon
          ref={ref}
          {...rest}
          className={ButtonStyles.icon({ class: className })}
        />
      )
    }
    return (
      <UIButton.Icon
        {...rest}
        className={ButtonStyles.icon({
          parentVariants: {
            size: parentSize,
            variant: parentVariant,
            action: parentAction,
          },
          size,
          class: className,
        })}
        ref={ref}
      />
    )
  },
)

type IButtonGroupProps = ComponentPropsWithoutRef<typeof UIButton.Group> &
  VariantProps<typeof ButtonStyles.group>

const ButtonGroup = forwardRef<
  ElementRef<typeof UIButton.Group>,
  IButtonGroupProps
>(({ className, space = 'md', ...rest }, ref) => {
  return (
    <UIButton.Group
      className={ButtonStyles.group({ class: className, space })}
      {...rest}
      ref={ref}
    />
  )
})

Button.displayName = 'Button'
ButtonText.displayName = 'ButtonText'
ButtonSpinner.displayName = 'ButtonSpinner'
ButtonIcon.displayName = 'ButtonIcon'
ButtonGroup.displayName = 'ButtonGroup'

export { Button, ButtonText, ButtonSpinner, ButtonIcon, ButtonGroup }
