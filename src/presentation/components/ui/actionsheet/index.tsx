import {
  useMemo,
  forwardRef,
  ElementRef,
  ElementType,
  ComponentPropsWithoutRef,
} from 'react'

import { Svg } from 'react-native-svg'
import { createActionsheet } from '@gluestack-ui/actionsheet'
import { Pressable, View, PressableProps } from 'react-native'

import type { VariantProps } from '@gluestack-ui/nativewind-utils'
import { withStates } from '@gluestack-ui/nativewind-utils/withStates'
import { cssInterop } from 'nativewind'
import {
  Motion,
  AnimatePresence,
  createMotionAnimatedComponent,
} from '@legendapp/motion'
import { actionsheetStyles } from './styles'

type IPrimitiveIcon = {
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

const ItemWrapper = forwardRef<ElementRef<typeof Pressable>, PressableProps>(
  ({ ...rest }, ref) => {
    return <Pressable {...rest} ref={ref} />
  },
)
ItemWrapper.displayName = 'ItemWrapper'

const AnimatedPressable = createMotionAnimatedComponent(Pressable)

export const UIActionsheet = createActionsheet({
  Root: View,
  Content: Motion.View,
  Item: withStates(ItemWrapper),
  DragIndicator: View,
  IndicatorWrapper: View,
  AnimatePresence,
  ItemText: () => null,
  Backdrop: AnimatedPressable,
  ScrollView: () => null,
  VirtualizedList: () => null,
  FlatList: () => null,
  SectionList: () => null,
  SectionHeaderText: () => null,
  Icon: () => null,
})

cssInterop(UIActionsheet, { className: 'style' })
cssInterop(UIActionsheet.Content, { className: 'style' })
cssInterop(ItemWrapper, { className: 'style' })

cssInterop(UIActionsheet.DragIndicator, { className: 'style' })
cssInterop(UIActionsheet.DragIndicatorWrapper, { className: 'style' })
cssInterop(UIActionsheet.Backdrop, { className: 'style' })

type RootProps = VariantProps<typeof actionsheetStyles.root> &
  ComponentPropsWithoutRef<typeof UIActionsheet>

const Root = forwardRef<ElementRef<typeof UIActionsheet>, RootProps>(
  ({ className, ...rest }, ref) => {
    return (
      <UIActionsheet
        className={actionsheetStyles.root({
          className,
        })}
        ref={ref}
        {...rest}
      />
    )
  },
)
Root.displayName = 'Actionsheet'

type ActionsheetOverlayProps = ComponentPropsWithoutRef<
  typeof UIActionsheet.Backdrop
> & {
  className?: string
}

const ActionsheetOverlay = forwardRef<
  ElementRef<typeof UIActionsheet.Backdrop>,
  ActionsheetOverlayProps
>(({ className, ...rest }, ref) => {
  return (
    <UIActionsheet.Backdrop
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 0.5,
      }}
      exit={{
        opacity: 0,
      }}
      {...rest}
      className={actionsheetStyles.overlay({
        className,
      })}
      ref={ref}
    />
  )
})
ActionsheetOverlay.displayName = 'ActionsheetOverlay'

type ActionsheetContentProps = VariantProps<typeof actionsheetStyles.content> &
  ComponentPropsWithoutRef<typeof UIActionsheet.Content> & {
    className?: string
  }

const ActionsheetContent = forwardRef<
  ElementRef<typeof UIActionsheet.Content>,
  ActionsheetContentProps
>(({ className, ...rest }, ref) => {
  return (
    <UIActionsheet.Content
      className={actionsheetStyles.content({
        class: className,
      })}
      ref={ref}
      {...rest}
    />
  )
})

ActionsheetContent.displayName = 'ActionsheetContent'

type ActionsheetItemProps = VariantProps<typeof actionsheetStyles.item> &
  ComponentPropsWithoutRef<typeof UIActionsheet.Item> & {
    selected?: boolean
  }

const ActionsheetItem = forwardRef<
  ElementRef<typeof UIActionsheet.Item>,
  ActionsheetItemProps
>(({ className, selected = false, ...rest }, ref) => {
  return (
    <UIActionsheet.Item
      className={actionsheetStyles.item({
        selected,
        class: className,
      })}
      ref={ref}
      {...rest}
    />
  )
})
ActionsheetItem.displayName = 'ActionsheetItem'

type ActionsheetDragIndicatorProps = VariantProps<
  typeof actionsheetStyles.dragIndicator
> &
  ComponentPropsWithoutRef<typeof UIActionsheet.DragIndicator>

const ActionsheetDragIndicator = forwardRef<
  ElementRef<typeof UIActionsheet.DragIndicator>,
  ActionsheetDragIndicatorProps
>(({ className, ...rest }, ref) => {
  return (
    <UIActionsheet.DragIndicator
      className={actionsheetStyles.dragIndicator({
        class: className,
      })}
      ref={ref}
      {...rest}
    />
  )
})
ActionsheetDragIndicator.displayName = 'ActionsheetDragIndicator'

type ActionsheetDragIndicatorWrapperProps = VariantProps<
  typeof actionsheetStyles.dragIndicatorWrapper
> &
  ComponentPropsWithoutRef<typeof UIActionsheet.DragIndicatorWrapper>

const ActionsheetDragIndicatorWrapper = forwardRef<
  ElementRef<typeof UIActionsheet.DragIndicatorWrapper>,
  ActionsheetDragIndicatorWrapperProps
>(({ className, ...rest }, ref) => {
  return (
    <UIActionsheet.DragIndicatorWrapper
      className={actionsheetStyles.dragIndicatorWrapper({
        class: className,
      })}
      ref={ref}
      {...rest}
    />
  )
})
ActionsheetDragIndicatorWrapper.displayName = 'ActionsheetDragIndicatorWrapper'

export const Actionsheet = {
  Root,
  Overlay: ActionsheetOverlay,
  Content: ActionsheetContent,
  Item: ActionsheetItem,
  DragIndicatorWrapper: ActionsheetDragIndicatorWrapper,
  DragIndicator: ActionsheetDragIndicator,
}
