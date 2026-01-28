// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tatertot0102.github.io',
  base: '/TNN4.0/',

  vite: {
    plugins: [tailwindcss()]
  }
});