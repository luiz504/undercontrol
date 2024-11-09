import { useDrizzleStudio } from 'expo-drizzle-studio-plugin'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator'
import { deleteDatabaseAsync, openDatabaseSync } from 'expo-sqlite'
import migrations from '~/drizzle/migrations/migrations'
import { useEffect } from 'react'

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
    console.log('migration 💋💋', migration.error?.cause) //eslint-disable-line
  }, [migration])

  //   useEffect(() => {
  //     if (migration.error) {
  //       console.log('migration.error 🤬🤬', migration.error)
  //       deleteDatabase()
  //     }
  //   }, [migration.error])

  return migration
}
