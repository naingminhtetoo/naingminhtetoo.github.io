import Section from '../components/Section'
import Icon from '../components/Icon'
import { profile } from '../data/portfolio'
export default function Contact() {
  return <Section id="contact" number="06" label="Get in touch" title="Let’s talk" intro="Have an opportunity in mind, or just want to say hello? Send me an email."><div className="contact-box"><div><p className="eyebrow">Start a conversation</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<Icon name="arrow"/></a><p className="muted">Based in {profile.location}</p></div><a className="button primary" href={`mailto:${profile.email}`}>Say hello <Icon name="mail"/></a></div><div className="contact-social"><a href={profile.github}><Icon name="github"/> GitHub <span aria-hidden="true">↗</span></a><a href={profile.linkedin}><Icon name="linkedin"/> LinkedIn <span aria-hidden="true">↗</span></a></div></Section>
}
