import { ComponentProps, ElementRef, forwardRef, useState } from 'react'
import { Pressable } from 'react-native'
import { Text } from './text'
import RNDatePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { tva } from '@gluestack-ui/nativewind-utils/tva'
import { LucideIcon } from './lucide-icon'
import { format } from 'date-fns'
import { VStack } from './vstack'
import { Form } from './form'

type Props = ComponentProps<typeof RNDatePicker> & {
  error?: string
}
const root = tva({
  base: 'h-12 flex-grow flex-row items-center justify-between rounded-md border bg-transparent px-3',
  variants: {
    focused: {
      true: 'border-black-ternary',
      false: 'border-black-secondary',
    },
  },
})

export const DatePicker = forwardRef<ElementRef<typeof Pressable>, Props>(
  ({ className, error, value, onChange, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleChange = (event: DateTimePickerEvent, date?: Date) => {
      setIsOpen(false)
      onChange?.(event, date)
    }

    const label = format(value, 'dd/MM/yyyy')

    return (
      <VStack className="flex-grow gap-1">
        <Pressable
          ref={ref}
          className={root({ focused: isOpen, className })}
          onPress={() => setIsOpen(true)}
        >
          <Text>{label}</Text>
          <LucideIcon name="Calendar" size={16} className="text-white" />
        </Pressable>
        {error && <Form.Error error={error} />}
        {isOpen && (
          <RNDatePicker {...rest} onChange={handleChange} value={value} />
        )}
      </VStack>
    )
  },
)

DatePicker.displayName = 'DatePicker'
