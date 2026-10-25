# Naing Min Htet Oo — Portfolio

React + TypeScript + Vite + Tailwind CSS. Public content has been checked against the October 24, 2026 application PDFs: `NaingMinHtetOo_履歴書.pdf`, `NaingMinHtetOo_職務経歴書.pdf`, and `NaingMinHtetOo_ポートフォリオ.pdf`. Project entries are preserved as explicitly requested; see `CONTENT_AUDIT.md` for differences that remain.

## Local development

```sh
npm install
npm run dev
```

## Check and build

```sh
npm run lint
npm run build
npm run preview
```

## GitHub Pages

Create a repository named `naingminhtetoo.github.io` for the root personal site, or use any repository name for a project site. Push this project to its `main` branch. Under **Settings → Pages → Build and deployment**, select **GitHub Actions**. The included workflow builds and publishes `dist`. Relative Vite asset paths support both root and repository subpaths. No router/server rewrites are needed.

Deployment has not been performed automatically. For Vercel, import the repository and select Vite; build command `npm run build`, output directory `dist`.

## Customize

- `src/data/portfolio.ts`: contact URLs, experience, projects, skills, and courses. Optional `githubUrl` and `demoUrl` fields enable project links when real URLs become available.
- `src/sections/`: hero, about, education, language, contest, and contact copy.
- `src/index.css`: colors, typography, responsive layout, and animations.
- The hero’s **Request my resume** button opens an email request. The outdated `public/CV.pdf` has been removed; the original `CV.pdf` remains in the project root. Do not copy the private application PDFs into `public`.
- `public/profile.jpg`: the optimized profile photo already used by the live site, displayed by `src/components/ProfileCard.tsx` on desktop and mobile. The original `public/profile.png` is retained.
- `src/hooks/useReveal.ts`: short section entrance animations; reduced-motion users see content without motion.
- `index.html`: SEO metadata. Update `og:url` if using a different domain or repository path. Add an Open Graph image only when a real asset exists.

GitHub and email match the current portfolio PDF. LinkedIn remains the previously supplied URL; it is not listed in the three current PDFs. The degree title remains the previously supplied B.C.Sc.; the current resume confirms university attendance and graduation but does not name the degree. The current documents do not list the programming contests, so those entries have been removed. Courses are listed as training, separately from confirmed Japanese qualifications. Unsupported technologies are omitted from the skills list; project technologies are unchanged by request. The contact section and resume request use mailto and do not need a backend.

Theme defaults to the system preference and saves an explicit selection locally. Navigation supports keyboard focus, a skip link, and Escape to close the mobile menu. Motion respects `prefers-reduced-motion`. The original PDF remains in the repository root unchanged.

## English / Japanese localization

The visible **EN | 日本語** control switches languages immediately without navigation or a reload. On phones it stays in the header beside the theme/menu controls; GitHub and LinkedIn remain available in the mobile menu, hero, and footer.

- `src/i18n/types.ts`: shared `Language` type (`en` or `ja`) and the typed translation schema.
- `src/i18n/translations.ts`: interface copy, accessibility labels, metadata, and Japanese project/experience translations. Original company, project, course, and technology names remain unchanged. Project dates retain their exact approved display strings; employment and education periods are formatted for the selected language.
- `src/i18n/LanguageContext.ts`: context and `useLanguage()` hook exposing `language`, `setLanguage`, and `t`.
- `src/i18n/LanguageProvider.tsx`: language initialization, persistence, and updates to HTML `lang`, page title, description, and Open Graph text.
- `src/components/LanguageSwitcher.tsx`: native keyboard-operable buttons with an active `aria-pressed` state.

A valid explicit choice in `localStorage['portfolio-language']` takes priority. Otherwise, a browser language starting with `ja` selects Japanese; all other languages select English. Only manual choices are saved. Invalid saved values fall back to browser detection. If browser storage is disabled, detection and switching still work for the current visit.

`src/data/portfolio.ts` remains the factual source and is unchanged by localization. English project copy is read directly from it. Japanese project translations are keyed by each original project name and contain only category, description, and contribution; dates, technologies, names, and URLs always come from the original entry. If adding a future entry, add a matching Japanese translation; missing entries safely fall back to their original text. Update both language dictionaries when editing interface copy. No translation library or downloaded font is required.

Checks performed: Japanese/non-Japanese browser detection; saved-choice priority; invalid/disabled storage; manual and keyboard switching without reload; refresh/new-tab persistence; translated metadata and accessible labels; both themes; layouts at 320–1440px; and a before/after comparison of every approved project entry and confidentiality notice. No contest section was added because the current site has none.
