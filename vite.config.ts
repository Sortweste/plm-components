import { defineConfig } from 'vite'
import { resolve } from 'path';
import { peerDependencies, dependencies } from './package.json'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components'),
      hooks: resolve(__dirname, 'src/hooks'),
      styles: resolve(__dirname, './src/styles'),
      "@styles": resolve(__dirname, "./src/styles"),
      '@': resolve(__dirname, './src'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.ts'),
        hooks: resolve(__dirname, 'src/hooks.ts'),
      },
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
      output: [
        {
          dir: resolve(__dirname, 'dist'),
          format: 'es',
          entryFileNames: "[name].[format].js",
          assetFileNames: "[name].[ext]",
          globals: {
            react: 'React',
          },
        },
        {
          dir: resolve(__dirname, 'dist'),
          format: 'cjs',
          entryFileNames: "[name].[format].js",
          assetFileNames: "[name].[ext]",
          globals: {
            react: 'React',
          },
        }
      ],
    },
    sourcemap: true,
  }
})
