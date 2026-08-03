import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//TailWindCSS導入時に直接追加
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
})
