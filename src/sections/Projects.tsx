import Section from '../components/Section'
import Icon from '../components/Icon'
import { projects } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'
export default function Projects() {
  const { t } = useLanguage()
  return (
    <Section id="projects" number="03" {...t.projects.heading}>
      <div className="projects-grid">
        {projects.map((project, i) => {
          const copy = t.projects.entries[project.name] ?? project
          return <article key={project.name} className={`project-card ${i === 0 ? 'featured' : ''}`}>
            <div className="project-top"><span className="project-category">{copy.category}</span><span className="project-number">0{i + 1}</span></div>
            <h3 lang="en">{project.name}</h3>
            <p className="project-description">{copy.description}</p>
            <div className="contribution"><h4>{t.projects.contribution}</h4><p>{copy.contribution}</p></div>
            <div className="tags" role="group" aria-label={t.projects.technologies}>{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
            <div className="project-footer">
              <span lang="en">{project.date}</span>
              {project.githubUrl && <a href={project.githubUrl} aria-label={t.projects.sourceLabel(project.name)}><Icon name="github"/></a>}
              {project.demoUrl && <a href={project.demoUrl}>{t.projects.demo}<Icon name="arrow"/></a>}
            </div>
          </article>
        })}
      </div>
      <p className="project-note">{t.projects.note}</p>
    </Section>
  )
}
