import Icon from '../components/Icon'
import ProfileCard from '../components/ProfileCard'
import { profile } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'
export default function Hero() {
  const { t } = useLanguage()
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <p className="eyebrow"><span className="location-dot"/>{t.common.location}</p>
        <h1 lang="en">Naing Min<br/>Htet Oo<span className="accent">.</span></h1>
        <p className="hero-role"><span className="hero-role-title">{t.common.softwareEngineer}</span><span className="role-separator" aria-hidden="true">/</span><br className="mobile-break"/><span className="hero-role-title">{t.common.fullStackDeveloper}</span></p>
        <p className="hero-intro">{t.hero.intro[0]}<br/>{t.hero.intro[1]}</p>
        <p className="hero-description">{t.hero.description}</p>
        <div className="hero-buttons">
          <a className="button primary" href="#projects">{t.hero.viewWork}<Icon name="arrow"/></a>
          <a className="button secondary" href={`mailto:${profile.email}?subject=${encodeURIComponent(t.hero.resumeSubject)}`}>{t.hero.requestResume}<Icon name="mail"/></a>
        </div>
        <div className="hero-social">
          <a href={profile.github} aria-label={t.common.githubLabel}><Icon name="github"/>GitHub</a>
          <a href={profile.linkedin} aria-label={t.common.linkedinLabel}><Icon name="linkedin"/>LinkedIn</a>
          <a href="#contact">{t.hero.contact}<span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <ProfileCard/>
      <div className="hero-bottom"><span>{t.hero.platforms}</span><a href="#about">{t.hero.aboutLink}<span aria-hidden="true">↓</span></a></div>
    </section>
  )
}
