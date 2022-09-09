import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { windi } from "svelte-windicss-preprocess"

export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [svelte({
    preprocess: [windi({})],
    experimental: {
      useVitePreprocess: true,
    }
  })],
})
