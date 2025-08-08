console.log('✔ vite.config.js is being used');

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 4321,
    allowedHosts: ['127.0.0.1', 'localhost', /\.ngrok-free\.app$/],
    headers: {
      'ngrok-skip-browser-warning': 'true',
    },
  },
});