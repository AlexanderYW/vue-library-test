import vue from '@vitejs/plugin-vue'
import path from 'path'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'library'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', '@vitejs/plugin-vue', '@vue/compiler-sfc'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    },
    manifest: false,
  },
  plugins: [
    vue()
  ]
}
