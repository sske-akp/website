// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // PLACEHOLDER — real domain will be set in a later phase
  site: 'https://www.example.com',
  prefetch: true,
  integrations: [icon()],
  vite: { plugins: [tailwindcss()] },
});