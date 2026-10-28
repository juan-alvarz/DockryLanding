# Dockry landing page

Landing page for [Dockry](https://github.com/juan-alvarz/Dockry), a dock for macOS that changes with
what you're doing. Built with [Astro](https://astro.build) and [pnpm](https://pnpm.io) (run
`corepack enable` once to get it). No client-side framework, no analytics.

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # output in dist/
NODE_PATH=$(npm root -g) pnpm screenshot   # screenshots/ for pull requests (needs Playwright)
```

## Where things are

- `src/pages/index.astro`: the page. Each design is a pull request into `dev` that replaces it.
- `src/components/Dock.astro`: a working miniature of Dockry for the hero. Hovering magnifies the
  icons; the profile button switches between Work and Chill and sets `--profile` on the page to
  the profile's color (and sends a `dockry:profile` event), so a design can recolor itself.
  Designs restyle it with custom properties: `--icon`, `--dock-bg`, `--dock-edge`,
  `--dock-radius`, `--tile-radius`, `--dock-shadow`, `--dock-text`, `--widget-bg`.
- `src/layouts/Base.astro`: the page shell (meta tags, copy buttons, a small reset).
- `src/i18n/en.ts`: all the copy, shared by every design. To add a language, copy it, translate
  it, and register it in `src/i18n/index.ts` and `astro.config.mjs`.
- `src/config.ts`: GitHub links.
- `src/assets/`: the app icon and screenshots, copied from the Dockry repo's `docs/screenshots`.
  Astro optimizes them at build time.

## Branches

`main` is what's live; `dev` collects work before it goes to `main`. Each design direction is a
branch `design/NN-name` with a pull request into `dev` and its screenshots in `screenshots/`.
Merge the one you pick, then merge `dev` into `main`.
