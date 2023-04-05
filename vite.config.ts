import { defineConfig } from 'vite'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [svelte({
    preprocess: [vitePreprocess()],
  })],
})
