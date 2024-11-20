import { cn } from '@gluestack-ui/nativewind-utils/cn'
import { Tabs } from 'expo-router'

import { Entypo, FontAwesome } from '~/presentation/components/ui/vector-icons'
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
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              size={28}
              name="credit-card-alt"
              className={cn('text-disabled', focused && 'text-pink')}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
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
    </Tabs>
  )
}
