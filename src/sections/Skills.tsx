import Section from '../components/Section'
import { skills } from '../data/portfolio'
export default function Skills() {
  return <Section id="skills" number="04" label="Toolkit" title="My tech stack" intro="The languages, frameworks, and tools I work with."><div className="skills-grid">{skills.map(s => <article className="skill-card" key={s.title}><span className="skill-icon" aria-hidden="true">{s.icon}</span><h3>{s.title}</h3><div className="tags">{s.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></Section>
}
