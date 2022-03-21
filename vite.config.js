import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(
    {
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true
      },
      manifest: {
        name: "Receppies app",
        short_name: "Receppies",
        theme_color: "#1a1a1a",
        start_url: "index.html",
        display: "standalone",
        background_color: "#1a1a1a",
        icons: [
          {
            src: "img/icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
            },
            {
            src: "img/icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            },
            {
            src: "img/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            },
            {
            src: "img/icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
            },
            {
            src: "img/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            },
            {
            src: "img/icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
            },
            {
            src: "img/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            },
            {
            src: "img/icons/icon-284x284.png",
            sizes: "284x284",
            type: "image/png",
            },
            {
            src: "img/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            }
        ],
      },
    }
  )],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/receppies/',
})
