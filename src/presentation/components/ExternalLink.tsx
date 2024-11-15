import { ComponentProps, FC } from 'react'
import { Link } from 'expo-router'
import { Platform } from 'react-native'
import * as WebBrowser from 'expo-web-browser'

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string }
export const ExternalLink: FC<Props> = (props) => {
  return (
    <Link
      target="_blank"
      {...props}
      // @ts-expect-error: External URLs are not typed.
      href={props.href}
      onPress={(e) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          e.preventDefault()
          // Open the link in an in-app browser.
          WebBrowser.openBrowserAsync(props.href as string)
        }
      }}
    />
  )
}
