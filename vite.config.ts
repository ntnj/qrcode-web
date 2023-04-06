import { defineConfig } from 'vite'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  build: {
    minify: false,
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          content: [
            './index.html',
            './src/**/*.{ts,svelte}',
          ],
          corePlugins: {
            preflight: false,
          },
        }),
      ],
    }
  },
  plugins: [
    svelte({
      preprocess: [vitePreprocess()],
    }),
  ],
})
