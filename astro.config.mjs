// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://takatakazuma.github.io',
  base: '/blog',
  integrations: [tailwind()],
});
