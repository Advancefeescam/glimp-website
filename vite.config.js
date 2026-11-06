import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Multi-page Vite build: both routes are real HTML files on GitHub Pages.
// No SPA rewrite or 404 redirect is necessary for /glimp-website/download/.
export default defineConfig({
  plugins: [react()],
  base: '/glimp-website/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2022',
    rolldownOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        download: resolve(import.meta.dirname, 'download/index.html'),
      },
    },
  },
});
