import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  esbuild: {
    // Keep ESBuild enabled but with safer settings
    target: 'es2020',
    keepNames: true,
    minifyIdentifiers: false,
    logLevel: 'error'
  },
  optimizeDeps: {
    // More conservative dependency optimization
    exclude: ['@vitejs/plugin-react-swc']
  }
})