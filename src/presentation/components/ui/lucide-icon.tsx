import { icons, LucideProps } from 'lucide-react-native'
import { cssInterop } from 'nativewind'
import { FC } from 'react'

type Props = { name: keyof typeof icons } & LucideProps
export const LucideIcon: FC<Props> = ({ name, ...rest }) => {
  const Icon = cssInterop(icons[name], { className: 'style' })
  return <Icon {...rest} />
}
