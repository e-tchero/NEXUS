# ETCHERO company website

Company website for ETCHERO, focused on applied security research, cybersecurity automation, and practical security readiness for small and growing organisations.

## Local development

Requirements: Node.js and npm.

```powershell
npm install
npm run dev
```

## Production build

```powershell
npm run build
npm run preview
```

The deployable website is generated in `dist/`. The build is static HTML, CSS, JavaScript, and images; it does not require Node.js on the hosting server.

## Deploy to InfinityFree

1. Sign in to the InfinityFree account that owns `etchero.ct.ws`.
2. Open that hosting account's FTP details or File Manager.
3. Back up the current site files before replacing anything.
4. Open the domain's `htdocs` web root.
5. Upload the **contents of `dist/`** into `htdocs` (not the source project and not the enclosing `dist` folder).
6. Confirm `index.html` and `logo.png` are directly inside `htdocs`, and the `assets/` folder is beside them.
7. Test the HTTPS site on desktop and mobile, then check the browser console and contact link.

## Hosting architecture

- Frontend: React + Vite, built locally.
- Motion: GSAP and Lenis.
- Backend options: PHP is supported by InfinityFree; Node.js server processes are not.
- Database options: MySQL/MariaDB are advertised by InfinityFree. No database has been created or connected by this project yet.
- Contact: opens an email draft to `etcherotech@gmail.com`; no messages are stored by the site.
- No API keys, database credentials, or hosting passwords are stored in this repository.

## Before launch

- Verify domain SSL and the actual hosting account's FTP/web-root details.
- Confirm the email address is the intended public company contact.
- Review the final copy and logo rendering.
- Upload the production build and verify it live.
- Add the domain to Google Search Console and submit the sitemap after launch.
