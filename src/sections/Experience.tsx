import Section from '../components/Section'
import { experiences, profile } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'
export default function Experience() {
  const { t } = useLanguage()
  return (
    <Section id="experience" number="02" {...t.experience.heading}>
      <div className="timeline">
        {experiences.map((job, i) => {
          const copy = t.experience.entries[job.company] ?? job
          return <article className="experience-row" key={job.company}>
            <div className="experience-date"><span className={`timeline-dot ${i === 0 ? 'current' : ''}`}/><p>{copy.date}</p><span>{job.location === profile.location ? t.common.location : job.location}</span></div>
            <div className="experience-content">
              <h3>{job.company}{i === 0 && <span className="status-tag">{t.common.current}</span>}</h3>
              <p className="role">{copy.role}</p>
              <ul>{copy.points.map((text, index) => <li key={index}>{text}</li>)}</ul>
            </div>
          </article>
        })}
      </div>
    </Section>
  )
}
