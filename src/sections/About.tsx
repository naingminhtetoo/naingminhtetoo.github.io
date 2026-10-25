import Section from '../components/Section'
import { useLanguage } from '../i18n/LanguageContext'
export default function About() {
  const { t } = useLanguage()
  return (
    <Section id="about" number="01" {...t.about.heading}>
      <div className="about-grid">
        <div className="about-copy">{t.about.paragraphs.map((text, i) => <p key={i}>{text}</p>)}</div>
        <div className="focus-card">
          <span className="eyebrow">{t.about.focusLabel}</span>
          {t.about.focus.map((item, i) => <div className="focus-row" key={i}><span>0{i + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div>)}
        </div>
      </div>
    </Section>
  )
}
