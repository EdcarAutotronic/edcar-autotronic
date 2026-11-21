import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// La ruta pública del repositorio EdcarAutotronic/edcar-autotronic.
// GitHub Pages necesita /edcar-autotronic/; el servidor local utiliza /.
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'serve' ? '/' : '/edcar-autotronic/',
}))
