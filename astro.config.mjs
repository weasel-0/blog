import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind()],
  markdownOptions: {
    render: [
      "@astrojs/markdown-remark",
      {
        contentCollections: {
          pins: {
            path: "pins/:slug",
          },
        },
      },
    ],
  },
});
