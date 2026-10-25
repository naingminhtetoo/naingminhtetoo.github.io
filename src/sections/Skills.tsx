import Section from '../components/Section'
import { skills } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'
export default function Skills() {
  const { t } = useLanguage()
  return <Section id="skills" number="04" {...t.skills.heading}><div className="skills-grid">{skills.map(skill => <article className="skill-card" key={skill.title}><span className="skill-icon" aria-hidden="true">{skill.icon}</span><h3>{t.skills.categories[skill.title] ?? skill.title}</h3><div className="tags">{skill.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></Section>
}
