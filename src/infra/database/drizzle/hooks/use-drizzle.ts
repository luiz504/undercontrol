import { useEffect } from 'react'
import { deleteDatabaseAsync, openDatabaseSync } from 'expo-sqlite'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin'
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator'

import migrations from '~/drizzle/migrations/migrations'

export const DATABASE_NAME = 'undercontrol.db' as const

const expoDB = openDatabaseSync(DATABASE_NAME)
const db = drizzle(expoDB, { logger: true })

export async function deleteDatabase() {
  try {
    await db.$client.closeAsync()
    await deleteDatabaseAsync(DATABASE_NAME)
    console.log('Database deleted successfully') // eslint-disable-line
  } catch (error) {
    console.log('Failed to delete database', error)// eslint-disable-line
  }
}

export const useDrizzle = () => {
  useDrizzleStudio(expoDB)
  const migration = useMigrations(db, migrations)

  useEffect(() => {
    console.log('migration 💋💋', migration) //eslint-disable-line
  }, [migration])

  //   useEffect(() => {
  //     if (migration.error) {
  //       console.log('migration.error 🤬🤬', migration.error)
  //       deleteDatabase()
  //     }
  //   }, [migration.error])

  return migration
}
