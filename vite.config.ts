import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
// @ts-nocheck
import { svgstore } from './src/vite_plugins/svgstore';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    define: command === 'build' ? {
      DEBUG: false
    } : {
      DEBUG: true
    },
    server: {
      origin: 'http://localhost:3000',
      host: '0.0.0.0',
      proxy: {
        '/api/v1': {
          target: 'http://47.109.52.85:3000/'
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: any) {
            if (id.includes('echarts')) {
              return 'echarts'
            }
            if (id.includes('mock') || id.includes('faker')) {
              return 'mock'
            }
            if (id.includes('vant')) {
              return 'vant'
            }
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        }
      }
    },
    plugins: [
      vue(),
      vueJsx({
        transformOn: true,
        mergeProps: true
      }),
      svgstore(),
      styleImport({
        resolves: [VantResolve()]
      })
    ]
  }
})
