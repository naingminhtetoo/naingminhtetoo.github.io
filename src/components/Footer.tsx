import { profile } from '../data/portfolio'
export default function Footer() {
  return <footer className="container footer"><div><a href="#home" className="footer-name">{profile.name}</a><p>Software Engineer / Full-Stack Developer</p></div><div><a href={profile.github}>GitHub</a><a href={profile.linkedin}>LinkedIn</a><span>© {new Date().getFullYear()} {profile.name}</span></div></footer>
}
