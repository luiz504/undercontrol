import { useTranslation } from 'react-i18next'

import { Entypo, VStack } from '~/presentation/components/ui'
import { HeaderIconTitle } from '../components/templates/header-icon-title'

export function SummaryScreen() {
  const { t } = useTranslation()

  return (
    <VStack className="flex-1 px-8">
      <HeaderIconTitle
        icon={<Entypo size={28} name="line-graph" className="text-purple" />}
        title={t('Summary')}
      />
    </VStack>
  )
}
