import Section from '../components/Section'
import { courses, japaneseQualifications } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'
export default function Education() {
  const { language, t } = useLanguage()
  return (
    <Section id="education" number="05" {...t.education.heading}>
      <div className="education-grid">
        <div>
          <h3 className="subheading">{t.education.education}</h3>
          <article className="education-card">
            <span className="eyebrow">{t.education.dates}</span>
            <h4>{t.education.degree}<span>(B.C.Sc.)</span></h4>
            <p lang="en">University of Computer Studies (Lashio)</p><p className="muted">{t.education.location}</p>
          </article>
          <h3 className="subheading language-heading">{t.education.languages}</h3>
          <div className="language-row language-row--japanese">
            <span>{t.education.japanese}</span>
            <ul className="language-qualifications">{japaneseQualifications.map(qualification => <li key={qualification.english}><p>{language === 'ja' ? qualification.japanese : qualification.english}</p></li>)}</ul>
          </div>
          <div className="language-row"><span>{t.education.english}</span><span className="muted">{t.education.englishLevel}</span></div>
          <div className="language-row"><span>{t.education.burmese}</span><span className="muted">{t.education.native}</span></div>
        </div>
        <div>
          <h3 className="subheading">{t.education.courses}</h3>
          <div className="courses">{courses.map(course => <article className="course-row" key={course.name}><div><h4 lang="en">{course.name}</h4><p>{t.education.providers[course.provider] ?? course.provider}</p></div><span>{course.year}</span></article>)}</div>
        </div>
      </div>
    </Section>
  )
}
