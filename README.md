# JISC Attendance

Modern recreation of [JISC Study Goal](https://studygoal.jisc.ac.uk/), an attendance tool used by many universities in UK.

Created out of boredom in a lecture, as a flex, and because the original app has a dated Material UI look.

## Stack

- [Nuxt 3 (+ Vue.js)](https://nuxt.com/)
- [Nuxt UI](https://ui.nuxtlabs.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [VueUse](https://vueuse.org/)
- [Vite PWA](https://vite-pwa-org.netlify.app/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## Setup

Make sure to install the dependencies:

```bash
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Build PWA Assets

Upload icon to `public/icon.png` then run:

```bash
bun run generate-pwa-assets
```
