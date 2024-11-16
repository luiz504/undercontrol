import { FC, useEffect } from 'react'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { Stack } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { SQLiteProvider } from 'expo-sqlite'

import '~/infra/internationalization'
import 'react-native-reanimated'
import '../styles/global.css'

import { GluestackUIProvider } from '~/presentation/components/ui'

import {
  DATABASE_NAME,
  useDrizzle,
} from '~/infra/database/drizzle/hooks/use-drizzle'
import { QueryProvider } from '~/infra/cache/query-provider'
import { StatusBar } from 'expo-status-bar'
import { colors } from '~/styles/theme/colors'
import { LoadingCenter } from '~/presentation/components/templates/loading-center'

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
    <>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <QueryProvider>
          <GluestackUIProvider>
            {!loaded && <LoadingCenter />}
            {loaded && <RootLayoutNav />}
          </GluestackUIProvider>
        </QueryProvider>
      </SafeAreaProvider>
    </>
  )
}

const RootLayoutNav: FC = () => {
  return (
    <SQLiteProvider databaseName={DATABASE_NAME}>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: colors.black.DEFAULT },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </SQLiteProvider>
  )
}
