import {
  ComponentPropsWithRef,
  ElementRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react'
import { Pressable, ScrollView, TouchableOpacity } from 'react-native'
import { Text } from '../text'

import { cn } from '@gluestack-ui/nativewind-utils/cn'

import { LucideIcon } from '../lucide-icon'
import { Actionsheet } from '../actionsheet'
import { selectStyle } from './styles'
import { VStack } from '../vstack'
import { Form } from '../form'
export type Option = {
  label: string
  value: string
}
type Props = ComponentPropsWithRef<typeof TouchableOpacity> & {
  value?: Option
  defaultValue?: Option
  placeHolder?: string
  options: Option[]
  onValueChange?: (value: Option) => void
  error?: string
}

type SelectHandlers = {
  setValue: (value?: Option['value']) => void
  focus: () => void
}

export const Select = forwardRef<ElementRef<typeof TouchableOpacity>, Props>(
  (
    { options, value, placeHolder, className, onValueChange, error, ...rest },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false)

    const handlePressItem = (option: Option) => {
      setIsOpen(false)
      onValueChange?.(option)
    }
    const hasValue = !!value
    useImperativeHandle(
      ref,
      () =>
        ({
          focus: () => {
            setIsOpen(true)
          },
        }) as ElementRef<typeof TouchableOpacity> & SelectHandlers,
      [],
    )

    return (
      <>
        <VStack className="gap-1">
          <Pressable
            ref={ref}
            className={selectStyle.root({ className, focused: isOpen })}
            {...rest}
            onPress={() => setIsOpen(true)}
          >
            <Text className={selectStyle.text({ isPlaceholder: !hasValue })}>
              {value?.label || placeHolder}
            </Text>
            <LucideIcon
              name="ChevronDown"
              size={24}
              className={cn('text-zinc-700', isOpen && 'text-zinc-400')}
            />
          </Pressable>
          {error && <Form.Error>{error}</Form.Error>}
        </VStack>

        <Actionsheet.Root isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Actionsheet.Overlay />
          <Actionsheet.Content>
            <Actionsheet.DragIndicatorWrapper>
              <Actionsheet.DragIndicator />
            </Actionsheet.DragIndicatorWrapper>

            <ScrollView className="max-h-[40vh] w-full">
              {options.map((option) => (
                <Actionsheet.Item
                  key={option.value}
                  onPress={() => handlePressItem(option)}
                >
                  <Text>{option.label}</Text>
                </Actionsheet.Item>
              ))}
            </ScrollView>
          </Actionsheet.Content>
        </Actionsheet.Root>
      </>
    )
  },
)
Select.displayName = 'Select'
