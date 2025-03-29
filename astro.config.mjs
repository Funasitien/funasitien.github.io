import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkToc from 'remark-toc';
import remarkObsidian from 'remark-obsidian';

// https://astro.build/config
export default defineConfig({
  site: 'https://funa.dev',
  integrations: [icon(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: {
    prefetchAll: true
  },
  markdown: {
    remarkPlugins: [
      [remarkToc, { heading: 'toc', maxDepth: 3 } ],
      remarkObsidian,
    ],
  },
});
