export const LANGUAGES = ['en', 'pt', 'es'] as const
export type Language = (typeof LANGUAGES)[number]

export const KV_KEY_LANGUAGE = 'language'
