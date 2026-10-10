import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serveert de site onder /glimp-website/
export default defineConfig({
  plugins: [react()],
  base: '/glimp-website/',
  build: { outDir: 'dist', emptyOutDir: true, target: 'es2022' },
});
