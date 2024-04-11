import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    },
    manifest: {
      name: "Uber clone",
      shortName: "Uber clone",
      description: "This is an Uber clone",
      backgroundColor: "#ffffff",
      theme_color: "#000000",
      msTileColor: "#000000",
      display: "standalone",
      orientation: "portrait",
      appleMobileWebAppCapable: "yes",
      workboxPluginMode: "GenerateSW",
        icons: [
          {
            src: 'image/logo/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'image/logo/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
      
    }
  })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

})
