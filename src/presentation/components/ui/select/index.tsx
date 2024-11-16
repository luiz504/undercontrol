import {
  ComponentPropsWithRef,
  ElementRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react'
import { Pressable, ScrollView, TouchableOpacity } from 'react-native'

import { cn } from '@gluestack-ui/nativewind-utils/cn'

import { LucideIcon } from '../lucide-icon'
import { Actionsheet } from '../actionsheet'
import { selectStyle } from './styles'
import { VStack } from '../vstack'
import { Form } from '../form'
import { Text } from '../text'
import { useTranslation } from 'react-i18next'

export type Option = {
  label: string
  value: string
}
type Props = ComponentPropsWithRef<typeof TouchableOpacity> & {
  value?: Option
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
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const _placeHolder = placeHolder || t('Select...')
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
        <VStack className={cn('flex-grow gap-1', className)}>
          <Pressable
            ref={ref}
            className={selectStyle.root({ focused: isOpen })}
            {...rest}
            onPress={() => setIsOpen(true)}
          >
            <Text className={selectStyle.text({ isPlaceholder: !hasValue })}>
              {value?.label || _placeHolder}
            </Text>
            <LucideIcon
              name="ChevronDown"
              size={24}
              className={cn(
                'text-black-secondary',
                isOpen && 'text-black-ternary',
              )}
            />
          </Pressable>
          {error && <Form.Error error={error} />}
        </VStack>

        <Actionsheet.Root isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Actionsheet.Overlay />
          <Actionsheet.Content>
            <Actionsheet.DragIndicatorWrapper className="mb-2">
              <Actionsheet.DragIndicator />
            </Actionsheet.DragIndicatorWrapper>

            <ScrollView
              className="max-h-[40vh] w-full"
              contentContainerClassName="gap-1"
            >
              {options.map((option) => (
                <Actionsheet.Item
                  key={option.value}
                  selected={option.value === value?.value}
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
