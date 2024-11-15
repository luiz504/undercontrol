import { useTranslation } from 'react-i18next'

import {
  Divider,
  Form,
  Heading,
  SafeAreaView,
  Select,
} from '~/presentation/components/ui'
import { useTranslationsHelpers } from '~/hooks/translations/useTranslationHelpers'
import { Language } from '~/infra/internationalization/constants'

export function SettingsScreen() {
  const { t, i18n } = useTranslation()
  const { languageOptions, changeLanguage } = useTranslationsHelpers()

  return (
    <SafeAreaView className="flex-1 px-8">
      <Heading>{t('Settings')}</Heading>

      <Divider className="my-3 mb-8" />

      <Form.Section>
        <Form.Label>{t('Language')}</Form.Label>
        <Select
          value={languageOptions.find((l) => l.value === i18n.language)}
          options={languageOptions}
          onValueChange={({ value }) => changeLanguage(value as Language)}
        />
      </Form.Section>
    </SafeAreaView>
  )
}
