import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/portfolio'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../i18n/LanguageContext'
import type { SectionId } from '../i18n/types'
import Icon from './Icon'
import LanguageSwitcher from './LanguageSwitcher'
const links: SectionId[] = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']
export default function Navigation() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const { t } = useLanguage()
  const button = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); button.current?.focus() } }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])
  return (
    <header className="site-header">
      <nav className="container nav" aria-label={t.nav.label}>
        <a href="#home" className="logo" aria-label={t.nav.homeLabel}>n<span>.</span></a>
        <div id="navigation-links" className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(id => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{t.nav.links[id]}</a>)}
          <div className="mobile-social-links">
            <a href={profile.github} aria-label={t.common.githubLabel}>GitHub</a>
            <a href={profile.linkedin} aria-label={t.common.linkedinLabel}>LinkedIn</a>
          </div>
        </div>
        <div className="nav-actions">
          <LanguageSwitcher/>
          <a className="header-social" href={profile.github} aria-label={t.common.githubLabel}><Icon name="github"/></a>
          <a className="header-social" href={profile.linkedin} aria-label={t.common.linkedinLabel}><Icon name="linkedin"/></a>
          <span className="nav-divider"/>
          <button type="button" onClick={toggle} aria-label={theme === 'dark' ? t.nav.lightTheme : t.nav.darkTheme}><Icon name={theme === 'dark' ? 'sun' : 'moon'}/></button>
          <button type="button" ref={button} className="menu-toggle" aria-label={open ? t.nav.close : t.nav.open} aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'}/></button>
        </div>
      </nav>
    </header>
  )
}
