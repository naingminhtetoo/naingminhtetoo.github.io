import { profile } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'
export default function Footer() {
  const { t } = useLanguage()
  return <footer className="container footer"><div><a href="#home" className="footer-name">{profile.name}</a><p>{t.common.softwareEngineer} / {t.common.fullStackDeveloper}</p></div><div><a href={profile.github} aria-label={t.common.githubLabel}>GitHub</a><a href={profile.linkedin} aria-label={t.common.linkedinLabel}>LinkedIn</a><span>© {new Date().getFullYear()} {profile.name}</span></div></footer>
}
