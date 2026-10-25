import Navigation from './components/Navigation'
import { useLanguage } from './i18n/LanguageContext'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'
export default function App() {
  const { t } = useLanguage()
  return <><a className="skip-link" href="#main">{t.common.skip}</a><Navigation/><main id="main"><Hero/><About/><Experience/><Projects/><Skills/><Education/><Contact/></main><Footer/></>
}
