import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

const isLibBuild = process.env.BUILD_TARGET === 'lib';

export default defineConfig({
  plugins: [
    react(),
    ...(isLibBuild ? [dts({
      include: ['src'],
      exclude: ['src/**/*.stories.tsx'],
      tsconfigPath: './tsconfig.build.json',
      rollupTypes: true,
    })] : []),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        lm:    resolve(__dirname, 'src/lm/index.ts'),
      },
      name: 'FasDesignSystem',
      formats: ['es', 'cjs'],
      fileName: (format, name) => `${name}.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJsxRuntime',
        },
        // 多 entry 共用一份 style.css（core + lm 元件 CSS + tokens）
        // 消費端從 `./styles` 或 `./lm/styles` 引用都指向同一份檔案。
        assetFileNames: 'style[extname]',
      },
    },
    copyPublicDir: false,
  },
});
