import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { ViteSSGOptions } from 'vite-ssg'
import generateSitemap from 'vite-ssg-sitemap'

const ssgOptions: ViteSSGOptions = {
  script: 'async',
  formatting: 'minify',
  onFinished() {
    generateSitemap({ hostname: 'https://geoochi.site' })
  },
}

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  ssgOptions,
  plugins: [
    tailwindcss(),
    Vue({
      include: [/\.vue$/],
    }),
    Pages({
      extensions: ['vue'],
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/],
    }),
  ],
})
