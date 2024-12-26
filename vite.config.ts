import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'EventFuzzComponentLibrary',
      fileName: (format) => `eventfuzz-components-library.${format}.js`,
      // formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', /^react\/.*/, 'react-dom', /react-dom\/.*/],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
