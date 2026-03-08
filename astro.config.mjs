import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  build: {
    format: "directory"
  },
  trailingSlash: "always",
  integrations: [tailwind()],
});
