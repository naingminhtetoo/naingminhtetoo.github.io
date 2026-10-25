import { createContext, useContext } from 'react'
import type { Language, Translations } from './types'
export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}
export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
