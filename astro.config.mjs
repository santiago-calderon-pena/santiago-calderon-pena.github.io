import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://santiagocalderon1999.github.io',
  base: 'personal-site',
  integrations: [mdx(), sitemap(), tailwind()]
});