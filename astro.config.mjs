import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://f.dreamclouds.fr',
  integrations: [tailwind(), icon(), mdx(), sitemap()],
  experimental: {
    viewTransitions: true
  },
  prefetch: {
    prefetchAll: true
  }
});
