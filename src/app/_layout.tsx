import { FC, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { Stack } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { SQLiteProvider } from 'expo-sqlite'

import 'react-native-reanimated'
import '../styles/global.css'

import { GluestackUIProvider, VStack } from '~/components/ui'

import {
  DATABASE_NAME,
  useDrizzle,
} from '~/infra/database/drizzle/hooks/use-drizzle'
import { QueryProvider } from '~/infra/cache/query-provider'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const drizzle = useDrizzle()
  const [loaded, error] = useFonts({
    SpaceMono: require('assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error || drizzle.error) throw error || drizzle.error
  }, [error, drizzle])

  useEffect(() => {
    if (loaded && drizzle.success) {
      SplashScreen.hideAsync()
    }
  }, [loaded, drizzle.success])

  return (
    <GluestackUIProvider>
      <QueryProvider>
        <VStack className="flex-1 bg-purple-950">
          {!loaded && <ActivityIndicator />}
          {loaded && <RootLayoutNav />}
        </VStack>
      </QueryProvider>
    </GluestackUIProvider>
  )
}

const RootLayoutNav: FC = () => {
  return (
    <SQLiteProvider databaseName={DATABASE_NAME}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
      </Stack>
    </SQLiteProvider>
  )
}
