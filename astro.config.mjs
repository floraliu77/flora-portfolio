import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.florajingliu.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
