import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://karthi.page",
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
