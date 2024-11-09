import { ExpoSQLiteDatabase } from 'drizzle-orm/expo-sqlite'
import { SQLiteDatabase } from 'expo-sqlite'
import * as Schemas from '~/drizzle/schemas'
export type DrizzleDatabase = ExpoSQLiteDatabase<typeof Schemas> & {
  $client: SQLiteDatabase
}

export { Schemas }
