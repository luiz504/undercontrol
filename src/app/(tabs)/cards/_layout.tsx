import { Stack } from 'expo-router'

import { colors } from '~/styles/theme/colors'

export default function CardsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.black.DEFAULT },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="create" />
      <Stack.Screen name="details/[id]" />
    </Stack>
  )
}
