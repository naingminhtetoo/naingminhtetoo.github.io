import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'
export default function Section({ id, number, label, title, intro, children }: { id: string; number: string; label: string; title: string; intro?: string; children: ReactNode }) {
  const ref = useReveal()
  return <section ref={ref} id={id} className="section container"><div className="section-heading"><p className="eyebrow"><span>{number}</span> / {label}</p><h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div>{children}</section>
}
