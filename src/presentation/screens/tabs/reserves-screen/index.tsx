import { FC } from 'react'
import { FlatList } from 'react-native'
import { Plus } from 'lucide-react-native'
import { useTranslation } from 'react-i18next'

import { Button, FontAwesome6, VStack } from '~/presentation/components/ui'
import { mockReserves } from './components/mock-reserves'
import { ReserveItem } from './components/reserve-item'
import { HeaderIconTitle } from '~/presentation/components/templates/header-icon-title'

export const ReservesScreen: FC = () => {
  const { t } = useTranslation()

  return (
    <VStack className="flex-1 px-8 pb-8">
      <HeaderIconTitle
        icon={
          <FontAwesome6 size={25} name="piggy-bank" className="text-cyan" />
        }
        title={t('Provisioning_reserves')}
      />

      <FlatList
        className="flex-1"
        contentContainerClassName="flex-grow gap-3 py-2"
        data={mockReserves}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReserveItem item={{ ...item, balance: -10 }} />
        )}
      />

      <Button
        variant="outline"
        theme="secondary"
        icon={Plus}
        label={t('Reserve')}
      />
    </VStack>
  )
}
