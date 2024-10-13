import React from 'react'
import { Tabs } from 'expo-router'

import { FontAwesome, FontAwesome6 } from '~/components/ui'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#a855f7',
        tabBarStyle: {
          backgroundColor: '#09090b',
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reserves"
        options={{
          title: 'Reserves',
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={28} name="piggy-bank" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
