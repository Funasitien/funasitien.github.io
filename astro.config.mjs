/*
  DREAMCLOUD's PORTFOLIO CONFIG
  ---
  Please read before merging stuff.
*/

// Import config object
import { defineConfig } from 'astro/config';

// Styling
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// Features
import sitemap from "@astrojs/sitemap";

// Markdown
import mdx from "@astrojs/mdx";
import rehypeMermaid from 'rehype-mermaid';
import remarkToc from 'remark-toc';
import remarkObsidian from 'remark-obsidian';

export default defineConfig({
  site: 'https://funa.dev',
  integrations: [icon(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['code.vaatigames.ovh']
    }
  },
  prefetch: {
    prefetchAll: true
  },
  markdown: {
      syntaxHighlight: {
        type: 'shiki',
        excludeLangs: ['mermaid', 'math'],
      },
    remarkPlugins: [
      [remarkToc, { heading: 'toc', maxDepth: 3 } ],
      [remarkObsidian, { heading: 'toc', maxDepth: 3 }],
    ],
    rehypePlugins: [rehypeMermaid],
  },
  experimental: {
    headingIdCompat: true,
  },
});
