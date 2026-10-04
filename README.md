# Naing Min Htet Oo — Portfolio

React + TypeScript + Vite + Tailwind CSS. Portfolio content is based on the supplied CV.pdf.

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

Create a repository named `naingminhtetoo.github.io` for the root personal site, or use any repository name for a project site. Push this project to its `main` branch. Under **Settings → Pages → Build and deployment**, select **GitHub Actions**. The included workflow builds and publishes `dist`. Relative Vite asset paths and the base-aware CV link support both root and repository subpaths. No router/server rewrites are needed.

Deployment has not been performed automatically. For Vercel, import the repository and select Vite; build command `npm run build`, output directory `dist`.

## Customize

- `src/data/portfolio.ts`: contact URLs, experience, projects, skills, and courses. Optional `githubUrl` and `demoUrl` fields enable project links when real URLs become available.
- `src/sections/`: hero, about, education, language, contest, and contact copy.
- `src/index.css`: colors, typography, responsive layout, and animations.
- `public/CV.pdf`: byte-for-byte copy of the original CV. Replace this when updating the CV.
- `public/profile.png`: your profile photo, displayed by `src/components/ProfileCard.tsx` on desktop and mobile.
- `src/hooks/useReveal.ts`: short section entrance animations; reduced-motion users see content without motion.
- `index.html`: SEO metadata. Update `og:url` if using a different domain or repository path. Add an Open Graph image only when a real asset exists.

The GitHub profile URL uses the `naingminhtetoo` handle printed in the CV; LinkedIn and email use the PDF's embedded links. Confirm the GitHub handle before publishing. The CV provides no project/demo URLs. Myanmar Collegiate Programming Contest is listed without an award or placement; ICPC is explicitly presented as participation. The contact section uses mailto and does not need a backend.

Theme defaults to the system preference and saves an explicit selection locally. Navigation supports keyboard focus, a skip link, and Escape to close the mobile menu. Motion respects `prefers-reduced-motion`. The original PDF remains in the repository root unchanged.
