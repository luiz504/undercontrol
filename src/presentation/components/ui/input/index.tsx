import { ComponentProps, ElementRef, forwardRef, useState } from 'react'
import { Pressable, TextInput as RNTextInput } from 'react-native'

import { LucideIcon } from '../lucide-icon'
import { VStack } from '../vstack'
import { HStack } from '../hstack'
import { Form } from '../form'

import { inputStyle } from './styles'
import { colors } from '~/styles/theme/colors'

type InputProps = ComponentProps<typeof RNTextInput> & {
  error?: string
}
export const Input = forwardRef<ElementRef<typeof RNTextInput>, InputProps>(
  ({ className, error, onFocus, onBlur, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    return (
      <VStack className={inputStyle.inputContainer({ className })}>
        <RNTextInput
          className={inputStyle.input({ className, isFocused })}
          selectionColor={colors.white.DEFAULT}
          placeholderTextColor={colors.glowColor}
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
        {error && <Form.Error error={error} />}
      </VStack>
    )
  },
)
Input.displayName = 'Input'

export const InputPassword = forwardRef<
  ElementRef<typeof RNTextInput>,
  Omit<InputProps, 'keyboardType'>
>(({ error, onFocus, onBlur, className, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  return (
    <VStack className={inputStyle.inputContainer({})}>
      <HStack className="relative flex-grow">
        <RNTextInput
          className={inputStyle.input({
            isFocused,
            className,
            isPassword: true,
          })}
          selectionColor={colors.white.DEFAULT}
          placeholderTextColor={colors.glowColor}
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
            <LucideIcon
              name="EyeOff"
              size={24}
              className="text-black-secondary"
            />
          )}
          {!isHidden && (
            <LucideIcon name="Eye" size={24} className="text-black-secondary" />
          )}
        </Pressable>
      </HStack>
      {error && <Form.Error error={error} />}
    </VStack>
  )
})
InputPassword.displayName = 'InputPassword'
