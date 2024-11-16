import React, {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  FC,
  forwardRef,
  useMemo,
} from 'react'
import { createButton } from '@gluestack-ui/button'
import { Svg } from 'react-native-svg'
import {
  TouchableOpacity,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacityProps,
} from 'react-native'
import { useStyleContext } from '@gluestack-ui/nativewind-utils/withStyleContext'
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates'
import { cssInterop } from 'nativewind'
import { withStates } from '@gluestack-ui/nativewind-utils/withStates'
import type { VariantProps } from '@gluestack-ui/nativewind-utils'
import { buttonStyles } from './styles'

const SCOPE = 'BUTTON'
const ButtonWrapper = forwardRef<
  ElementRef<typeof TouchableOpacity>,
  TouchableOpacityProps
>(({ ...rest }, ref) => {
  return <TouchableOpacity {...rest} ref={ref} />
})

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

type ButtonIconProps = ComponentPropsWithoutRef<typeof UIButton.Icon> &
  VariantProps<typeof buttonStyles.icon> & {
    className?: string | undefined
    as?: ElementType
  }

const ButtonIcon: FC<ButtonIconProps> = ({ className, ...rest }, ref) => {
  const {
    variant: parentVariant,
    size: parentSize,
    theme: parentTheme,
  } = useStyleContext(SCOPE)

  return (
    <UIButton.Icon
      {...rest}
      className={buttonStyles.icon({
        parentVariants: {
          size: parentSize,
          variant: parentVariant,
          theme: parentTheme,
        },
        class: className,
      })}
      ref={ref}
    />
  )
}

type ButtonTextProps = ComponentPropsWithoutRef<typeof UIButton.Text> &
  VariantProps<typeof buttonStyles.text> & { className?: string }

const ButtonText: FC<ButtonTextProps> = ({ className, ...rest }) => {
  const {
    variant: parentVariant,
    size: parentSize,
    theme: parentTheme,
  } = useStyleContext(SCOPE)

  return (
    <UIButton.Text
      {...rest}
      className={buttonStyles.text({
        parentVariants: {
          size: parentSize,
          variant: parentVariant,
          theme: parentTheme,
        },
        class: className,
      })}
    />
  )
}

const ButtonSpinner = UIButton.Spinner

type ButtonProps = Omit<
  ComponentPropsWithoutRef<typeof UIButton>,
  'context' | 'children'
> &
  VariantProps<typeof buttonStyles.button> & {
    icon?: ElementType
    label?: string
    isLoading?: boolean
  }

const Button = forwardRef<ElementRef<typeof UIButton>, ButtonProps>(
  (
    {
      icon,
      label,
      isLoading,
      className,
      variant = 'solid',
      size = 'md',
      theme = 'primary',
      activeOpacity = 0.8,
      ...rest
    },
    ref,
  ) => {
    return (
      <UIButton
        ref={ref}
        {...rest}
        className={buttonStyles.button({
          variant,
          size,
          theme,
          class: className,
        })}
        context={{ variant, size, theme }}
        activeOpacity={activeOpacity}
      >
        {isLoading && (
          <ButtonSpinner
            className={buttonStyles.icon({
              parentVariants: {
                size,
                variant,
                theme,
              },
            })}
          />
        )}
        {icon && !isLoading && <ButtonIcon as={icon} />}
        {label && !isLoading && <ButtonText>{label}</ButtonText>}
      </UIButton>
    )
  },
)
Button.displayName = 'Button'

export { Button }
