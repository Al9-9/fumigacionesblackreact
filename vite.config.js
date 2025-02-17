import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,  // Habilita los source maps para producción
  },
  server: {
    hmr: true,  // Asegura que Hot Module Replacement esté activado
  },
})
