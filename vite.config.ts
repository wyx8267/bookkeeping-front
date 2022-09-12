import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/bookkeeping-front/dist/' : './',
    server: {
      origin: 'http://localhost:3000/',
      host: '0.0.0.0'
    },
    plugins: [
      vue(),
      vueJsx({
        transformOn: true,
        mergeProps: true
      })
    ]
  }
})
