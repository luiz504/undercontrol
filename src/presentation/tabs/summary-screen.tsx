import { useTranslation } from 'react-i18next'

import {
  Divider,
  Heading,
  SafeAreaView,
  VStack,
} from '~/presentation/components/ui'

export function SummaryScreen() {
  const { t } = useTranslation()

  return (
    <SafeAreaView className="flex-1 px-8">
      <VStack>
        <Heading>{t('Summary')}</Heading>
        <Divider />
      </VStack>
    </SafeAreaView>
  )
}
