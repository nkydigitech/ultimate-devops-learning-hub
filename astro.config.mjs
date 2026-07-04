import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://nkydigitech.github.io",
  base: "/ultimate-devops-learning-hub",

  integrations: [
    mdx(),
    sitemap(),
  ],
});