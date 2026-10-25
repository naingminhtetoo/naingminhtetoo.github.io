import Section from '../components/Section'
import Icon from '../components/Icon'
import { profile } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'
export default function Contact() {
  const { t } = useLanguage()
  return (
    <Section id="contact" number="06" {...t.contact.heading}>
      <div className="contact-box">
        <div><p className="eyebrow">{t.contact.conversation}</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<Icon name="arrow"/></a><p className="muted">{t.contact.basedIn(t.common.location)}</p></div>
        <a className="button primary" href={`mailto:${profile.email}`}>{t.contact.hello}<Icon name="mail"/></a>
      </div>
      <div className="contact-social"><a href={profile.github} aria-label={t.common.githubLabel}><Icon name="github"/>GitHub<span aria-hidden="true">↗</span></a><a href={profile.linkedin} aria-label={t.common.linkedinLabel}><Icon name="linkedin"/>LinkedIn<span aria-hidden="true">↗</span></a></div>
    </Section>
  )
}
