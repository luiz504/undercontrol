import { cssInterop } from 'nativewind'
import { FontAwesome, FontAwesome6, Entypo } from '@expo/vector-icons'

cssInterop(FontAwesome, { className: 'style' })
cssInterop(FontAwesome6, { className: 'style' })
cssInterop(Entypo, { className: 'style' })

export { FontAwesome, FontAwesome6, Entypo }
