import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://creativemkstudios.github.io',
  base: '/HurleyElectrical',
  trailingSlash: 'always',
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
