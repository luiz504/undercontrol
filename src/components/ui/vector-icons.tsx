import { cssInterop } from 'nativewind'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'

cssInterop(FontAwesome, { className: 'style' })
cssInterop(FontAwesome6, { className: 'style' })

export { FontAwesome, FontAwesome6 }
