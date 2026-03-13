import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        ex1: resolve(__dirname, 'ex1/index.html'),
        ex2: resolve(__dirname, 'ex2/index.html'),
        ex3: resolve(__dirname, 'ex3/index.html')
      }
    }
  }
})
