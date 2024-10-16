import { Tabs } from 'expo-router'

import { Entypo, FontAwesome6, FontAwesome } from '~/components/ui/vector-icons'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#a855f7',
        tabBarStyle: {
          borderColor: '#f8fafc',
          backgroundColor: '#09090b',
        },
        tabBarLabelStyle: {
          display: 'none',
        },
        headerShown: false,
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
    </Tabs>
  )
}
