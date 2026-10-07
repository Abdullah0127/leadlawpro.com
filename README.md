# Road Accident Support

## Search engine setup

- The production canonical origin is `https://leadlawpro.com`. Set `VITE_SITE_URL` only if the production domain changes; the app uses it for page canonical links and Open Graph URLs.
- `public/robots.txt` permits search engine crawling and links to `public/sitemap.xml`. Submit the sitemap to Google Search Console after the domain is live and verified.
- Route titles, descriptions, social previews, and image alt text are maintained in `src/App.jsx`, `index.html`, and the page components.
- Metadata is not a ranking guarantee. Search visibility also depends on useful, trustworthy content, site performance, external signals, and correct deployment.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
