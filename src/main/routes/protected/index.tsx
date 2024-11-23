import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { cn } from '@gluestack-ui/nativewind-utils/cn'

import { colors } from '~/presentation/styles/theme/colors'

import { Entypo, FontAwesome } from '~/presentation/components/ui/vector-icons'
import { SummaryScreen } from '~/presentation/screens/tabs/summary-screen'
import { SettingsScreen } from '~/presentation/screens/tabs/settings-screen'

import { ProtectedTabParamList } from '../types'

import { CardsStackRoutes } from './cards'

const Tab = createBottomTabNavigator<ProtectedTabParamList>()

export const ProtectedTabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.purple.DEFAULT,
        tabBarInactiveTintColor: colors.disabled,
        tabBarStyle: {
          borderColor: colors.glowColor,
          backgroundColor: colors.black.DEFAULT,
          height: 60,
        },
        tabBarLabelStyle: {
          display: 'none',
        },
        tabBarItemStyle: {
          paddingVertical: 10,
        },
      }}
    >
      <Tab.Screen
        name="Summary"
        component={SummaryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo size={28} name="line-graph" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={CardsStackRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              size={28}
              name="credit-card-alt"
              className={cn('text-disabled', focused && 'text-pink')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="cog"
              size={28}
              className={cn('text-disabled', focused && 'text-orange')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
