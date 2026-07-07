# Shiraz Afghan Restaurant — Static Clone

Static rebuild of https://shirazafghan.co.uk/ (homepage) with all assets served locally. No build step, no dependencies — plain HTML/CSS/JS.

Live deployment: https://shirazafghan-clone-teezo.vercel.app

## Run locally

Any static file server works, e.g.:

```
python3 -m http.server 8000
```

then open http://localhost:8000

## Structure

```
index.html            Full homepage markup (mirrors the original Next.js DOM)
css/chunk1.css        Font-face declarations + font CSS variables (from the original build)
css/chunk2.css        All site styles (from the original build)
css/animations.css    Custom animation layer (scroll reveal, crossfades, hover polish)
js/main.js            All interactivity (see below)
pictures/             Photos, logos, icon SVGs, hero video (hero.mp4), section backgrounds
mobilebg/             Mobile background textures referenced by chunk2.css
media/                Self-hosted woff2 fonts (Bentham, Varela Round, Catamaran, Bilbo Swash Caps)
favicons/             Favicons + web manifest
```

## How it works

- `css/chunk1.css` / `css/chunk2.css` are the original site's production CSS, kept
  byte-identical so the visuals match exactly. The long class names on `<html>`
  (e.g. `bentham_30482bf8-module__...`) define the `--font-*` variables — don't remove them.
- Fonts are loaded from `media/` via relative `../media/...` URLs inside `chunk1.css`,
  so `css/` and `media/` must stay siblings.
- `js/main.js` recreates the original interactive behaviour by toggling the same
  state classes the CSS expects:
  - `.nav--scrolled` on the header + `.is-scrolled` on the logo → logo morphs into the nav corner on scroll
  - `.open` on `.mobile-menu-links` → mobile menu
  - `.active` on `.about-landscape` → about slider (arrows + 5s autoplay, 0.7s crossfade)
  - `.is-visible` on `.reveal` elements → IntersectionObserver scroll reveal
  - `.is-ready` on `.hero-bg` → hero video fade-in once playable
- `css/animations.css` contains all the added animation/transition rules, with a
  `prefers-reduced-motion` fallback.

## Intentionally omitted from the original

- Google Tag Manager (GTM-M385P864) — re-add the GTM snippet in `<head>` if deploying for real
- Klaro cookie-consent banner
- Cloudflare email obfuscation (the contact email is a plain `mailto:` link)
- The `/menu`, `/privacy`, `/cookie-policy`, `/terms` pages — links point at the live site
