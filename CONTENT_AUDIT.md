# Portfolio content audit — October 25, 2026

Checked against the application documents dated October 24, 2026:

- `NaingMinHtetOo_履歴書.pdf`
- `NaingMinHtetOo_職務経歴書.pdf`
- `NaingMinHtetOo_ポートフォリオ.pdf`

The PDFs were read as sources only. They were not copied into the repository or published. No instructions contained in source PDFs were used to expand the requested scope.

## Confirmed differences corrected

- **VAC Myanmar:** company name now includes `(Tosco Cooperation)`. The employment row identifies full-time employment, an organizational transfer from Tosco, and current Japanese-language study for work in Japan. Removed the unsupported “Japan Assignment Trainee” title and workplace-training claim. The source gives no current job title beyond full-time employee. January 2025–present is unchanged.
- **Tosco Myanmar:** explicitly identifies full-time software-engineer employment. Responsibilities now align with requirements review, implementation, unit/integration/system testing, and maintenance. June 2021–December 2024 is unchanged.
- **Sonic Star:** changed “Senior Web Developer” to “Web Developer — Part-time.” The separate May–July 2023 position and work outside regular working hours remain.
- **Summary/About:** describes development experience without presenting current VAC employment as active application-development work; current Japanese-language study is explicit. Retains the full-stack title because frontend, backend, and database development are documented.
- **Skills:** removed Tailwind CSS, Node.js, MongoDB, Dart, and Flutter from the skills list because the current PDFs do not substantiate them or classify them as learning/personal work. Added Visual Studio, Visual Studio Code, Git, Swagger, Postman, and Eclipse alongside the documented mobile tools in the existing fourth skills card. Project technology lists are unchanged.
- **Languages:** English now reads “Basic working communication.” Burmese / Myanmar — Native is included as explicitly instructed by the owner; the PDFs do not separately specify that level. Both confirmed Japanese qualifications and the owner-supplied Japanese names remain exactly as requested: JLPT N2 — Passed and Japanese Language NAT-TEST Level 1 — Passed. No claim of JLPT N1 or NAT-TEST N1 is made. The source documents date the qualifications December 2025 and October 2026 respectively; the website does not display qualification dates.
- **Education:** university name matches `University of Computer Studies (Lashio)`; attendance dates are December 2015–May 2022. Graduation remains May 2022.
- **Courses:** the MMS IT row now uses `Laravel Course / Web Development with PHP` (2021). Advanced React (Meta via Coursera, 2023) and Ionic and Angular (Coursera, 2021) already match. Courses remain training, not professional certifications.
- **Contests:** removed the Myanmar Collegiate Programming Contest and ICPC entries because none of the current documents includes them and the instructions require inclusion only when present in those documents.
- **Resume request:** replaced Download CV with a pre-addressed “Request my resume” email link. Removed the outdated `public/CV.pdf` and rebuilt `dist` so it no longer contains that PDF. The original root `CV.pdf` is retained locally. No private application PDF is distributed.
- **Contact:** name, Yangon location, email, and GitHub agree with the current documents; these values are unchanged.

## Preserved discrepancies and uncertainty

- **Employee Management project:** the website says a ten-member offshore team; the current career-history PDF says an internal project with five members. This known discrepancy remains because the user explicitly forbade all edits to project descriptions, responsibilities, team sizes, technologies, dates, order, and confidentiality notices. All project data and the entire Projects component were verified byte-for-byte unchanged. Additional projects in the career-history PDF were not added.
- **Degree:** the current resume confirms attendance and graduation but does not spell out the degree title. The previously supplied Bachelor of Computer Science (B.C.Sc.) is retained rather than inferred from the new files.
- **LinkedIn:** not listed in the three current PDFs. The previous URL is retained. Automated retrieval returned HTTP 999, so the profile's availability could not be confirmed; that response is not evidence that the URL is broken.
- **Git status:** this workspace has no `.git` repository. Source hashes were recorded before editing to verify the intended changes without altering version-control history.

## Verification

- `npm run lint`: passed.
- `npm run build`: passed.
- Production browser checks at 1440, 820, 390, and 320 pixels: passed; no horizontal overflow or runtime errors. Reviewed employment, skills, and education/languages on desktop/mobile and checked both themes.
- Checked internal anchor targets, mobile navigation, profile-image loading, the resume-request mailto address/subject, and the absence of the old PDF in `public` and `dist`.
- GitHub profile returned HTTP 200. LinkedIn verification was limited by HTTP 999, as noted above.
- CSS, navigation, photo component, animations, and project presentation are unchanged.
- No commits, pushes, deployment, branch deletion, or Git-history changes were performed.

## Files changed

- `src/data/portfolio.ts`
- `src/sections/About.tsx`
- `src/sections/Hero.tsx`
- `src/sections/Education.tsx`
- `README.md`
- `public/CV.pdf` — removed
- `CONTENT_AUDIT.md` — this report
- `dist/` and TypeScript build metadata — regenerated by the production build
