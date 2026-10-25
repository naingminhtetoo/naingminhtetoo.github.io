import { useLanguage } from '../i18n/LanguageContext'
export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  return (
    <div className="language-switcher" role="group" aria-label={t.nav.changeLanguage}>
      <button type="button" lang="en" aria-label="English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
      <button type="button" lang="ja" aria-label="日本語" aria-pressed={language === 'ja'} onClick={() => setLanguage('ja')}>日本語</button>
    </div>
  )
}
