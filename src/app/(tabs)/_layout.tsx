import { Tabs } from 'expo-router'

import {
  Entypo,
  FontAwesome6,
  FontAwesome,
} from '~/presentation/components/ui/vector-icons'
import { colors } from '~/styles/theme/colors'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
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
        headerShown: false,
        headerTintColor: 'red',
        sceneStyle: { backgroundColor: colors.black.DEFAULT },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo size={28} name="line-graph" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="credit-card-alt" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reserves"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={28} name="piggy-bank" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cog" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
