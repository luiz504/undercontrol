import { useTranslation } from 'react-i18next'

import { useTranslationsHelpers } from '~/hooks/translations/useTranslationHelpers'
import { Language } from '~/infra/internationalization/constants'

import { FontAwesome, Form, Select, VStack } from '~/presentation/components/ui'
import { HeaderIconTitle } from '../../components/templates/header-icon-title'

export function SettingsScreen() {
  const { t, i18n } = useTranslation()
  const { languageOptions, changeLanguage } = useTranslationsHelpers()

  return (
    <VStack className="flex-1 px-8">
      <HeaderIconTitle
        icon={<FontAwesome name="cog" size={25} className="text-orange" />}
        title={t('Settings')}
      />

      <Form.Section>
        <Form.Label>{t('Language')}</Form.Label>
        <Select
          value={languageOptions.find((l) => l.value === i18n.language)}
          options={languageOptions}
          onValueChange={({ value }) => changeLanguage(value as Language)}
        />
      </Form.Section>
    </VStack>
  )
}
