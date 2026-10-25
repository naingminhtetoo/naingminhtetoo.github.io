import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { LanguageContext } from './LanguageContext'
import { translations } from './translations'
import type { Language } from './types'
const storageKey = 'portfolio-language'
function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem(storageKey)
    if (saved === 'en' || saved === 'ja') return saved
  } catch { /* Browser language remains available when storage is disabled. */ }
  return navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en'
}
export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>(initialLanguage)
  const setLanguage = useCallback((next: Language) => {
    updateLanguage(next)
    try { localStorage.setItem(storageKey, next) } catch { /* Switching still works without persistence. */ }
  }, [])
  const t = translations[language]
  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.seo.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.seo.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.seo.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.seo.ogDescription)
  }, [language, t])
  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
