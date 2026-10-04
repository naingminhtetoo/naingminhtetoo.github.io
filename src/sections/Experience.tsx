import Section from '../components/Section'
import { experiences } from '../data/portfolio'
export default function Experience() {
  return <Section id="experience" number="02" label="Experience" title="Work experience" intro="Where I’ve worked and what I’ve been doing."><div className="timeline">{experiences.map((job,i) => <article className="experience-row" key={job.company}><div className="experience-date"><span className={`timeline-dot ${i === 0 ? 'current' : ''}`}/><p>{job.date}</p><span>{job.location}</span></div><div className="experience-content"><h3>{job.company}{i === 0 && <span className="status-tag">CURRENT</span>}</h3><p className="role">{job.role}</p><ul>{job.points.map(p => <li key={p}>{p}</li>)}</ul></div></article>)}</div></Section>
}
