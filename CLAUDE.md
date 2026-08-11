# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev     # dev server on http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (flat config, eslint-config-next 16)
```

There is no test suite and no test tooling installed. `npm run lint` is the only automated check — it currently reports 1 error (`react-hooks/set-state-in-effect` in [Nav.tsx:25](app/components/Nav.tsx#L25)) and 8 warnings (unused `Carousel`/`Link`/`Button` imports in the page files, `<img>` instead of `next/image`). Don't treat a non-zero lint exit as something you broke; do avoid adding new ones.

## What this is

Marketing site for a French catering business (Le Coin Cuisine Traiteur), Next.js 16 App Router, deployed on Vercel (`@vercel/analytics`). Four content pages plus the home page; no backend, no API routes, no database, no forms — all copy lives in JSON translation files.

## Architecture

**Everything is a client component.** Translation goes through `react-i18next`, which needs a React context, so [providers.tsx](app/providers.tsx) wraps the tree in `I18nextProvider` and every page starts with `"use client"`. Server Components / server-side data fetching are effectively unavailable in this layout as written. If you add a page, follow the same shape: `"use client"` + `useTranslation()`.

**i18n is client-side only, with no locale routing.** [i18n.ts](i18n.ts) imports both locale files statically (`resolveJsonModule`) into a single default `translation` namespace, hardcodes `lng: "fr"`, and `LanguageSwitcher` calls `i18n.changeLanguage()`. Consequences to keep in mind:
- URLs never carry a locale and language choice is not persisted (no cookie/localStorage) — a reload returns to French. `<html lang="fr">` is fixed in [layout.tsx](app/layout.tsx).
- `locales/fr/common.json` and `locales/en/common.json` must stay key-identical; a missing EN key silently falls back to French.
- Multi-paragraph body copy is stored as **arrays** of strings and read with `t("key", { returnObjects: true }) as string[]`, then mapped to `<p>`. Keep that pattern when adding copy.
- Some values contain inline HTML (`<b>` in `about.ecoResponsible`) and are rendered via `dangerouslySetInnerHTML`. Translation files are the only source of that HTML — keep it that way.

**The carousel belongs to Nav, not to pages.** [Nav.tsx](app/components/Nav.tsx) renders the sticky header *and* `<Carousel />` beneath it for every route except `/nous-contacter` (path check inside the component). Pages must not render `<Carousel />` themselves — several still import it unused, which is why lint warns. Slide images are hardcoded in [Carousel.tsx](app/components/Carousel.tsx) with French `alt` text that is not translated.

**Styling: Tailwind v4, but the palette is not a Tailwind theme.** [globals.css](app/globals.css) is just `@import "tailwindcss"` plus plain CSS custom properties on `:root` — there is no `tailwind.config` and no `@theme` block, so color utilities like `bg-background` (used in [layout.tsx](app/layout.tsx)) do **not** resolve to the palette. Working code references the variables explicitly: `bg-[var(--color-background)]`, `text-[var(--color-accent)]`, or inline `style` (see [Card.tsx](app/components/Card.tsx)). Use `var(--color-*)` for anything themed; register colors in `@theme` first if you want real Tailwind utilities.

**Shared UI is three small components.** `Button` (renders a `next/link` when given `href`, else a `<button>`; `selected` drives the accent color), `Card` (rounded surface using `--color-card-bg`), `Carousel` (Swiper with `Autoplay`). Routes are French slugs: `/evenements-entreprise`, `/evenements-prives`, `/nous-connaitre`, `/nous-contacter`.

## Content and assets

- Copy changes go in `locales/*/common.json`, not in JSX.
- `public/images/` holds unoptimized WhatsApp exports with spaces, parentheses, and accents in the filenames (`public/images/privé/…`). Not yet referenced by any page. If you wire them up, URL-encode paths.
- Contact details in [nous-contacter/page.tsx](app/nous-contacter/page.tsx) are placeholders (`+33 1 23 45 67 89`, `lien.instagram`) — don't assume they're real.
