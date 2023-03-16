import { defineConfig } from "astro/config"; // import lit from '@astrojs/lit';
import sitemap from "@astrojs/sitemap"; // https://astro.build/config
import image from "@astrojs/image";


// https://astro.build/config
export default defineConfig({
  site: "https://micchan-bentou.com/",
  integrations: [
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
