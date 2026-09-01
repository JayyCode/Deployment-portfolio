import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
const base = process.env.GITHUB_ACTIONS === 'true' ? '/Deployment-portfolio/' : '/'

export default defineConfig({
  // GitHub Pages serves this project at:
  // https://jayycode.github.io/Deployment-portfolio/
  // In the Base44 preview it is served at root.
  base,

  plugins: [
    base44({
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true
    }),
    react(),
  ]
});