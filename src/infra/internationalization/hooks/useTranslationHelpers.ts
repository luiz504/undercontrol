import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Language, LANGUAGES } from '~/infra/internationalization/constants'
import { LanguageAdapter } from '~/infra/internationalization/language-adapter'

import { Option } from '~/presentation/components/ui'

export const useTranslationsHelpers = () => {
  const { t, i18n } = useTranslation()

  const languageOptions = useMemo<Option[]>(() => {
    const dict: Record<Language, Option> = {
      en: { label: t('English'), value: 'en' },
      pt: { label: t('Portuguese'), value: 'pt' },
      es: { label: t('Spanish'), value: 'es' },
    }
    return Object.values(dict)
  }, [t])

  const changeLanguage = (language: Language) => {
    if (!LANGUAGES.includes(language)) return
    i18n.changeLanguage(language)
    LanguageAdapter.setLanguage(language)
  }

  return {
    languageOptions,
    changeLanguage,
  }
}
