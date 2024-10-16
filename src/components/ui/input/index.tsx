import {
  ComponentProps,
  ElementRef,
  FC,
  forwardRef,
  ReactNode,
  useState,
} from 'react'

import { Pressable, TextInput as RNTextInput } from 'react-native'
import { inputStyle } from './styles'
import { VStack } from '../vstack'
import { Text } from '../text'
import { HStack } from '../hstack'
import { LucideIcon } from '../lucide-icon'
type WrapperProps = Omit<ComponentProps<typeof VStack>, 'children'> & {
  children: ReactNode
}
const Wrapper: FC<WrapperProps> = ({ children, className, ...rest }) => {
  return (
    <VStack className={inputStyle.wrapper({ className })} {...rest}>
      {children}
    </VStack>
  )
}

type TextProps = Omit<ComponentProps<typeof Text>, 'children'> & {
  children: ReactNode
}
const Label: FC<TextProps> = ({ children, className, ...rest }) => {
  return (
    <Text className={inputStyle.label({ className })} {...rest}>
      {children}
    </Text>
  )
}
const Error: FC<TextProps> = ({ children, className, ...rest }) => {
  return (
    <Text className={inputStyle.error({ className })} {...rest}>
      {children}
    </Text>
  )
}

type InputProps = ComponentProps<typeof RNTextInput> & {
  error?: string
}
const TextInput = forwardRef<ElementRef<typeof RNTextInput>, InputProps>(
  ({ className, error, onFocus, onBlur, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    return (
      <VStack className={inputStyle.inputContainer({ className })}>
        <RNTextInput
          className={inputStyle.input({ className, isFocused })}
          selectionColor={'#a1a1aa'}
          placeholderTextColor={'#71717a'}
          onFocus={(e) => {
            setIsFocused(true)
            onFocus?.(e)
          }}
          onBlur={(e) => {
            setIsFocused(false)
            onBlur?.(e)
          }}
          {...rest}
          ref={ref}
        />
        {error && <Error>{error}</Error>}
      </VStack>
    )
  },
)
TextInput.displayName = 'TextInput'

const PWInput = forwardRef<
  ElementRef<typeof RNTextInput>,
  Omit<InputProps, 'keyboardType'>
>(({ error, onFocus, onBlur, className, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  return (
    <VStack className={inputStyle.inputContainer({})}>
      <HStack className="relative w-full bg-gray-600">
        <RNTextInput
          className={inputStyle.input({
            isFocused,
            className,
            isPassword: true,
          })}
          selectionColor={'#a1a1aa'}
          placeholderTextColor={'#71717a'}
          onFocus={(e) => {
            setIsFocused(true)
            onFocus?.(e)
          }}
          onBlur={(e) => {
            setIsFocused(false)
            onBlur?.(e)
          }}
          {...rest}
          ref={ref}
          secureTextEntry={isHidden}
        />

        <Pressable
          onPress={() => setIsHidden(!isHidden)}
          className={inputStyle.inputPWButton({})}
        >
          {isHidden && (
            <LucideIcon name="EyeOff" size={24} className="text-zinc-400" />
          )}
          {!isHidden && (
            <LucideIcon name="Eye" size={24} className="text-zinc-400" />
          )}
        </Pressable>
      </HStack>
      {error && <Error>{error}</Error>}
    </VStack>
  )
})
PWInput.displayName = 'PWInput'

export const Input = { Wrapper, Label, TextInput, PWInput }
