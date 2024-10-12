import { useColorScheme } from 'nativewind'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import EditScreenInfo from '~/components/EditScreenInfo'
import { View } from '~/components/Themed'

export default function TabOneScreen() {
  const { colorScheme, setColorScheme } = useColorScheme()
  return (
    <View style={styles.container} className="dark">
      <TouchableOpacity
        onPress={() =>
          setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
        }
      >
        <Text className="text-3xl text-slate-950 dark:text-slate-100">
          Change to {colorScheme === 'dark' ? 'Light' : 'Dark'} Mode
        </Text>
      </TouchableOpacity>
      <Text
        style={styles.title}
        className="text-3xl text-red-400 dark:text-purple-700"
      >
        Tab One
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
