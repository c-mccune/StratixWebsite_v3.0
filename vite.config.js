import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/StratixWebsite_v3.0/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
