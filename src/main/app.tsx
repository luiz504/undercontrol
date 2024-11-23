import { useEffect } from 'react'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

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

import { LoadingCenter } from '~/presentation/components/templates/loading-center'
import { Routes } from './routes'
import { SessionProvider } from '~/presentation/context/session/provider'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export function App() {
  const drizzle = useDrizzle()
  const [loaded, error] = useFonts({
    RobotoRegular: require('assets/fonts/Roboto-Regular.ttf'),
    RobotoMedium: require('assets/fonts/Roboto-Medium.ttf'),
    RobotoBold: require('assets/fonts/Roboto-Bold.ttf'),
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
        <SQLiteProvider databaseName={DATABASE_NAME}>
          <QueryProvider>
            <SessionProvider>
              <GluestackUIProvider>
                {!loaded && <LoadingCenter />}
                {loaded && <Routes />}
              </GluestackUIProvider>
            </SessionProvider>
          </QueryProvider>
        </SQLiteProvider>
      </SafeAreaProvider>
    </>
  )
}
