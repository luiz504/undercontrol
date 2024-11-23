import { FC } from 'react'
import { ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'

import { Heading, Box, LucideIcon, Button } from '~/presentation/components/ui'
import { useSession } from '../context/session/hook'

export const InitialScreen: FC = () => {
  const { t } = useTranslation()
  const { initSession } = useSession()
  const handleClientEnter = () => {
    initSession(new Date())
  }

  return (
    <ScrollView contentContainerClassName="flex-grow px-8" className="flex-1">
      <Box className="mt-12 items-center justify-center gap-3">
        <LucideIcon name="RefreshCcwDot" size={40} className="text-purple" />
        <Heading className="text-3xl">Under Control</Heading>
      </Box>

      <Box className="my-auto">
        <Heading className="text-xl">
          We want to keep your data even more secure. That&apos;s why we&apos;ll
          always ask for a password to access the app.
        </Heading>
      </Box>

      <Box className="mt-auto items-center pb-8">
        <Button
          className="w-full"
          onPress={handleClientEnter}
          label={t('Enter')}
        />
      </Box>
    </ScrollView>
  )
}
