export type Language = 'en' | 'ja'
export type SectionId = 'home' | 'about' | 'experience' | 'projects' | 'skills' | 'education' | 'contact'
export interface SectionCopy { label: string; title: string; intro?: string }
// Translations deliberately exclude project names, dates, technologies and URLs.
export interface ProjectCopy { category: string; description: string; contribution: string }
export interface ExperienceCopy { role: string; date: string; points: string[] }
export interface Translations {
  seo: { title: string; description: string; ogDescription: string }
  common: { skip: string; location: string; softwareEngineer: string; fullStackDeveloper: string; githubLabel: string; linkedinLabel: string; current: string }
  nav: { label: string; homeLabel: string; open: string; close: string; lightTheme: string; darkTheme: string; changeLanguage: string; links: Record<SectionId, string> }
  hero: { intro: [string, string]; description: string; viewWork: string; requestResume: string; resumeSubject: string; contact: string; platforms: string; aboutLink: string }
  profile: { greeting: string; stack: string }
  about: { heading: SectionCopy; paragraphs: [string, string, string]; focusLabel: string; focus: [FocusCopy, FocusCopy, FocusCopy] }
  experience: { heading: SectionCopy; entries: Partial<Record<string, ExperienceCopy>> }
  projects: { heading: SectionCopy; contribution: string; technologies: string; demo: string; sourceLabel: (name: string) => string; note: string; entries: Partial<Record<string, ProjectCopy>> }
  skills: { heading: SectionCopy; categories: Partial<Record<string, string>> }
  education: { heading: SectionCopy; education: string; dates: string; degree: string; location: string; languages: string; japanese: string; english: string; englishLevel: string; burmese: string; native: string; courses: string; providers: Partial<Record<string, string>> }
  contact: { heading: SectionCopy; conversation: string; basedIn: (location: string) => string; hello: string }
}
interface FocusCopy { title: string; description: string }
