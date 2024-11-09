import type { Config } from 'drizzle-kit'

export default {
  schema: './drizzle/schemas',
  out: './drizzle/migrations',
  dialect: 'sqlite',
  driver: 'expo',
  verbose: true,
} satisfies Config
