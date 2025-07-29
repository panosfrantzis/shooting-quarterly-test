import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    server: {
      allowedHosts: ['a9509b7c78d2.ngrok-free.app']
    }
  }
});