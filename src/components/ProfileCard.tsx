import { profile } from '../data/portfolio'

export default function ProfileCard() {
  return (
    <div className="profile-scene">
      <div className="portrait-dots" aria-hidden="true" />
      <div className="portrait-frame">
        <svg className="portrait-outline" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <rect className="outline-track" x="1" y="1" width="98" height="98" rx="4" />
          <rect className="outline-runner" x="1" y="1" width="98" height="98" rx="4" pathLength="100" />
        </svg>
        <img
          src={`${import.meta.env.BASE_URL}profile.png`}
          alt={profile.name}
          className="profile-photo"
          width="1792"
          height="2390"
          fetchPriority="high"
        />
        <div className="portrait-caption"><span className="location-dot" /> Hello, I'm NMHO.</div>
      </div>
      <span className="portrait-sticker sticker-code" aria-hidden="true">&lt;hello /&gt;</span>
      <span className="portrait-sticker sticker-stack">Web · Mobile · Backend</span>
      <span className="portrait-spark spark-one" aria-hidden="true">✳</span>
      <span className="portrait-spark spark-two" aria-hidden="true">+</span>
    </div>
  )
}
