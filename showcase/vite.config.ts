import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@delta/fas-design-system': path.resolve(__dirname, '../fas-design-system/src'),
    },
  },
});
