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
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'FasDesignSystem',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJsxRuntime',
        },
        assetFileNames: 'style[extname]',
      },
    },
    copyPublicDir: false,
  },
});
