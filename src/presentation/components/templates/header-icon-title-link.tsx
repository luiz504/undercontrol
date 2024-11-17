import { ComponentProps, ElementType, FC, ReactNode } from 'react'
import { Button, Heading, HStack } from '../ui'
import { Link } from 'expo-router'

import { Plus } from 'lucide-react-native'

type Props = {
  icon: ReactNode
  title: string
  linkTheme?: ComponentProps<typeof Button>['theme']
  linkIcon?: ElementType
  href: ComponentProps<typeof Link>['href']
} & Omit<ComponentProps<typeof HStack>, 'children'>
export const HeaderIconLink: FC<Props> = ({
  title,
  href,
  linkTheme,
  linkIcon = Plus,
  icon,
}) => {
  return (
    <HStack className="items-center justify-between gap-3 py-4">
      <HStack className="flex-1 items-center gap-3">
        {icon}
        <Heading className="flex-1 flex-wrap">{title}</Heading>
      </HStack>
      <Link asChild href={href}>
        <Button variant="outline" theme={linkTheme} icon={linkIcon} />
      </Link>
    </HStack>
  )
}
