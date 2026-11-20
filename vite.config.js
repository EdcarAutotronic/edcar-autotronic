import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repoName = 'EdcarAutotronic-taller'

export default defineConfig({
  base: '/edcar-autotronic/',
  plugins: [react(), tailwindcss()],
  // GitHub Pages se sirve en /<repo>/. En local se usa "/".
  // Sobrescribe con BASE_PATH=/otro-repo/ si el nombre del repositorio cambia.
  base: process.env.BASE_PATH ?? (process.env.GITHUB_ACTIONS === 'true' ? `/${repoName}/` : '/'),
})
