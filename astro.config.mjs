import { defineConfig } from 'astro/config';

// Local only for now. When hosting, set `site` (and `base` if it lives under a path, e.g. '/Dockry').
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  build: {
    // Small pages: keep their CSS in the HTML.
    inlineStylesheets: 'always',
  },
});
