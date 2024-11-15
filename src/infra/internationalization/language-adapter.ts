import { KVStorage } from '../kv-store'
import { KV_KEY_LANGUAGE, Language, LANGUAGES } from './constants'

export class LanguageAdapter {
  static getLanguage(): Language | null {
    const language = KVStorage.getItemSync(KV_KEY_LANGUAGE)
    if (LANGUAGES.includes(language as Language)) {
      return language as Language
    }
    return null
  }

  static setLanguage(language: Language) {
    KVStorage.setItemSync(KV_KEY_LANGUAGE, language)
  }
}
