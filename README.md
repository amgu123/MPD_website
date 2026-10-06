# Media Planet — Website

Marketing website for **Media Planet**, India's media intelligence platform. Tracks
news coverage and ad airings across TV News, Radio, Online News, YouTube and Social
Media, with multilingual translation.

Built with **HTML + Tailwind CSS**, compiled through the Tailwind CLI for a small,
fast, purged stylesheet (no CDN, no framework runtime). Design generated with the
[ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) skill and
themed to match the provided designs (navy + yellow/gold accent + cool gray).

## Pages

| Page | File | Content |
|------|------|---------|
| Home | `index.html` | Dark search hero, source stats, News + Ad solution cards, stat bar, Why Media Planet, CTA |
| News Monitoring | `news-monitoring.html` | Hero, Why it matters, One story many forms, practical situations, how it works, sources, CTA |
| Ad Monitoring | `ad-monitoring.html` | Hero + captured frames, Greater Control, Complete Coverage, Yesterday's Airings + sample report, how it works, CTA |
| News Translation | `news-translation.html` | Hero translation flow, Why translation matters, use cases, language CTA |
| Media Landscape | `media-landscape.html` | Channel grid + coverage breakdown |
| Resources | `resources.html` | Featured guide, article grid, newsletter CTA |
| About | `about.html` | Who we are, what we do, values, CTA |

All pages share the same sticky header (with a **Solutions** dropdown), mobile
menu, and footer. Every nav and footer link resolves to a real page.

## Folder structure

```
mpd_website/
├── public/                  # Everything served to the browser (deploy this folder)
│   ├── index.html
│   ├── news-monitoring.html
│   ├── ad-monitoring.html
│   ├── news-translation.html
│   ├── media-landscape.html
│   ├── resources.html
│   ├── about.html
│   ├── favicon.svg
│   └── assets/
│       ├── css/styles.css   # Compiled + minified Tailwind output
│       ├── js/main.js       # Mobile nav, search example chips, footer year
│       └── img/             # logo + placeholder SVGs (hero, channels, forms, ad-frames, coverage)
├── src/
│   └── styles/input.css     # Tailwind source (edit this, then rebuild)
├── tailwind.config.js       # Brand tokens (colors, fonts, shadows)
├── package.json
└── .kiro/steering/          # ui-ux-pro-max design skill
```

## Commands

```bash
npm install          # one-time: install Tailwind CLI + dev server
npm run build:css    # compile src/styles/input.css -> public/assets/css/styles.css (minified)
npm run watch:css    # rebuild CSS on change while developing
npm run serve        # serve ./public at http://localhost:5173
npm run dev          # build CSS once, then serve
```

> Run `npm run serve` (or `npm run dev`) manually in your terminal — it is a
> long-running process.

## Design notes

- **Colors:** accent yellow `#F5C518`, deep navy `#0B1626` / ink `#0E1A2B` (dark
  heroes, CTAs, footer), cool `surface` gray `#F5F7FA` sections, warm cream
  `#FDF9F0`/`#FBF3E2`, border `#E6EAF0`. Defined in `tailwind.config.js` under
  `theme.extend.colors` (`brand`, `ink`, `navy`, `surface`, `cream`, `line`, `muted`).
- **Typography:** Plus Jakarta Sans (loaded non-render-blocking).
- **Responsive:** mobile-first, verified at 375 / 768 / 1024 / 1440 px breakpoints.
- **Performance:** ~29 KB purged/minified CSS, ~1.4 KB JS (deferred), inline SVG
  icons (no icon-font download), fonts loaded async, `prefers-reduced-motion`
  respected, images lazy-loaded with explicit dimensions.
- **Accessibility:** semantic landmarks, skip link, visible focus rings, keyboard-
  operable nav + dropdown, SVG icons marked `aria-hidden`, 4.5:1+ text contrast.

## Images

Decorative/mock images are themed placeholder SVGs under `public/assets/img/`
(`hero/`, `channels/`, `forms/`, `ad-frames/`, `coverage/`). Drop in real photos
using the same filenames to replace them without touching the HTML.

## Editing the theme

Change brand colors or fonts in `tailwind.config.js`, then run `npm run build:css`
to regenerate `public/assets/css/styles.css`.
