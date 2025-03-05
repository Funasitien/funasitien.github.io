import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'futur.funacode.pages.dev',
  integrations: [tailwindcss(), icon(), mdx(), sitemap()],
  prefetch: {
    prefetchAll: true
  }
});
