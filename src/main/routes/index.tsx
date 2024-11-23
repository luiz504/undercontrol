import { FC } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useSession } from '~/presentation/context/session/hook'

import { InitialScreen } from '~/presentation/screens/initial-screen'
import { ProtectedTabRoutes } from './protected'

import { RootStackParamList } from './types'
import { colors } from '~/presentation/styles/theme/colors'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Routes: FC = () => {
  const { session } = useSession()
  const theme = DefaultTheme
  theme.colors.background = colors.black.DEFAULT
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: colors.black.DEFAULT },
          animation: 'slide_from_right',
          headerShown: false,
        }}
      >
        {!session && <Stack.Screen name="Welcome" component={InitialScreen} />}
        {session && (
          <Stack.Screen name="(Protected)" component={ProtectedTabRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
