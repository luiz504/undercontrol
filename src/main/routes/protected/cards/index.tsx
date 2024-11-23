import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CardsStackParamList } from '../../types'
import { CardListScreen } from '~/presentation/screens/tabs/cards/card-list-screen'
import { CardCreateScreen } from '~/presentation/screens/tabs/cards/card-create-screen'
import { CardDetailsScreen } from '~/presentation/screens/tabs/cards/card-details'
import { CreateCardTransactionScreen } from '~/presentation/screens/tabs/cards/create-card-transaction'

const Stack = createNativeStackNavigator<CardsStackParamList>()

export const CardsStackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="List" component={CardListScreen} />
      <Stack.Screen name="Create" component={CardCreateScreen} />
      <Stack.Screen name="Details" component={CardDetailsScreen} />
      <Stack.Screen
        name="CreateCardTransaction"
        component={CreateCardTransactionScreen}
      />
    </Stack.Navigator>
  )
}
