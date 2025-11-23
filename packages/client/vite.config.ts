import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  envPrefix: 'APP_',
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },

  server: {
    port: 5173,
    strictPort: false,
    host: true,
    open: false
  },

  build: {
    target: 'es2022',
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'naive-ui': ['naive-ui'],
          'vue': ['vue']
        }
      }
    }
  },

  optimizeDeps: {
    include: ['vue', 'naive-ui']
  }
})

