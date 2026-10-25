import { profile } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'

export default function ProfileCard() {
  const { t } = useLanguage()
  return (
    <div className="profile-scene">
      <div className="portrait-dots" aria-hidden="true" />
      <div className="portrait-frame">
        <svg className="portrait-outline" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <rect className="outline-track" x="1" y="1" width="98" height="98" rx="4" />
          <rect className="outline-runner" x="1" y="1" width="98" height="98" rx="4" pathLength="100" />
        </svg>
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt={profile.name}
          className="profile-photo"
          width="899"
          height="1200"
          fetchPriority="high"
        />
        <div className="portrait-caption"><span className="location-dot" /> {t.profile.greeting}</div>
      </div>
      <span className="portrait-sticker sticker-code" aria-hidden="true">&lt;hello /&gt;</span>
      <span className="portrait-sticker sticker-stack">{t.profile.stack}</span>
      <span className="portrait-spark spark-one" aria-hidden="true">✳</span>
      <span className="portrait-spark spark-two" aria-hidden="true">+</span>
    </div>
  )
}
