import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mon-amour-surprise/', // 👈 exactement le nom de TON repo GitHub
})
