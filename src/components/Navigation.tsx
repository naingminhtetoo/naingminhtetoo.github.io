import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/portfolio'
import { useTheme } from '../hooks/useTheme'
import Icon from './Icon'
const links = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact']
export default function Navigation() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const button = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); button.current?.focus() } }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])
  return <header className="site-header"><nav className="container nav" aria-label="Main navigation"><a href="#home" className="logo" aria-label="Naing Min Htet Oo home">n<span>.</span></a><div id="navigation-links" className={`nav-links ${open ? 'is-open' : ''}`}>{links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}</div><div className="nav-actions"><a href={profile.github} aria-label="GitHub"><Icon name="github" /></a><a href={profile.linkedin} aria-label="LinkedIn"><Icon name="linkedin" /></a><span className="nav-divider"/><button onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}><Icon name={theme === 'dark' ? 'sun' : 'moon'} /></button><button ref={button} className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button></div></nav></header>
}
