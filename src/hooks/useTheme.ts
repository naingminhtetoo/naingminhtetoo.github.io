import { useEffect, useState } from 'react'
export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try { const saved = localStorage.getItem('portfolio-theme'); if (saved === 'dark' || saved === 'light') return saved } catch { /* Storage may be disabled. */ }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('portfolio-theme', theme) } catch { /* Theme still works without storage. */ } }, [theme])
  return { theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }
}
