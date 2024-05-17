import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Intro-Section-with-Dropdown-Menu',
  plugins: [react()],
  server: {
    port: 3000,
  },
});
