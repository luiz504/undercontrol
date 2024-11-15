import i18n, { ResourceLanguage } from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from 'assets/translations/en.json'
import translationPT from 'assets/translations/pt.json'
import translationES from 'assets/translations/es.json'
import { Language } from './constants'

import { LanguageAdapter } from './language-adapter'

const FALLBACK_LANGUAGE: Language = 'en'

export const resources: Record<Language, ResourceLanguage> = {
  en: { translation: translationEN },
  pt: { translation: translationPT },
  es: { translation: translationES },
}

const initI18n = () => {
  const language = LanguageAdapter.getLanguage()

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng:
      process.env.NODE_ENV === 'development' ? false : FALLBACK_LANGUAGE,
    lng: language || FALLBACK_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
  })
}

initI18n()
