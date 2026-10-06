import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.hurleyltd.co.uk',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contact/thanks'),
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
