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

This existing repository publishes to **https://naingminhtetoo.github.io/**. Under **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**. No custom domain is needed for this URL.

The workflow in `.github/workflows/deploy.yml` runs on pushes to `main`, or manually from the Actions tab. It uses Node.js 22, installs the locked dependencies with `npm ci`, builds the application, uploads only `dist` as the Pages artifact, and deploys it using GitHub's official Pages actions. No `gh-pages` branch is needed. If the `github-pages` environment has branch restrictions, allow `main`.

Vite uses `base: '/'` for this root URL. The profile image, favicon, and downloadable CV use this base; Vite copies `public/CV.pdf` to `dist/CV.pdf`, available at `/CV.pdf`. Navigation uses section anchors, with no React Router or server rewrites needed.

After pushing deployment changes, wait for the **Deploy portfolio to GitHub Pages** workflow to succeed. Open the site and test **Download CV**, or visit **https://naingminhtetoo.github.io/CV.pdf** directly. If the old portfolio remains visible after deployment succeeds, hard-refresh the page. Local verification alone does not confirm a live deployment.

## Customize

- `src/data/portfolio.ts`: contact URLs, experience, projects, skills, and courses. Optional `githubUrl` and `demoUrl` fields enable project links when real URLs become available.
- `src/sections/`: hero, about, education, language, contest, and contact copy.
- `src/index.css`: colors, typography, responsive layout, and animations.
- `public/CV.pdf`: byte-for-byte copy of the original CV. Replace this when updating the CV.
- `public/profile.jpg`: compressed profile photo, displayed by `src/components/ProfileCard.tsx` on desktop and mobile. `public/profile.png` retains the original photo.
- `src/hooks/useReveal.ts`: short section entrance animations; reduced-motion users see content without motion.
- `index.html`: SEO metadata. Update `og:url` if using a different domain or repository path. Add an Open Graph image only when a real asset exists.

The GitHub profile URL uses the `naingminhtetoo` handle printed in the CV; LinkedIn and email use the PDF's embedded links. Confirm the GitHub handle before publishing. The CV provides no project/demo URLs. Myanmar Collegiate Programming Contest is listed without an award or placement; ICPC is explicitly presented as participation. The contact section uses mailto and does not need a backend.

Theme defaults to the system preference and saves an explicit selection locally. Navigation supports keyboard focus, a skip link, and Escape to close the mobile menu. Motion respects `prefers-reduced-motion`. The original PDF remains in the repository root unchanged.
