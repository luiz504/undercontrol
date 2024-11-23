import { ComponentProps, ElementType, FC, ReactNode } from 'react'
import { Button, Heading, HStack } from '../ui'

import { Plus } from 'lucide-react-native'
import { LinkProps, useLinkProps } from '@react-navigation/native'
import { RootStackParamList } from '~/main/routes/types'

type Props = {
  icon: ReactNode
  title: string
  linkTheme?: ComponentProps<typeof Button>['theme']
  linkIcon?: ElementType
  linkProps: LinkProps<RootStackParamList>
} & Omit<ComponentProps<typeof HStack>, 'children'>
export const HeaderIconLink: FC<Props> = ({
  title,
  linkProps,
  linkTheme,
  linkIcon = Plus,
  icon,
}) => {
  const _linkProps = useLinkProps(linkProps)
  return (
    <HStack className="items-center justify-between gap-3 py-4">
      <HStack className="flex-1 items-center gap-3">
        {icon}
        <Heading className="flex-1 flex-wrap">{title}</Heading>
      </HStack>

      <Button
        variant="outline"
        {..._linkProps}
        theme={linkTheme}
        icon={linkIcon}
      />
    </HStack>
  )
}
