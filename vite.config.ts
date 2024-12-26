import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
import { execSync } from 'child_process';

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: 'dist', // Output .d.ts files directly in the `dist` folder
      rollupTypes: true, // Flatten types into a single file
      include: ['./src', './tailwind.config.ts'], // Include src and Tailwind config
      insertTypesEntry: true, // Add `types` entry to package.json
    }),
    {
      name: 'compile-tailwind-config',
      closeBundle() {
        // Compile Tailwind config during the build
        execSync(
          'tsc tailwind.config.ts --declaration --emitDeclarationOnly false --outDir dist',
          {
            stdio: 'inherit',
          },
        );
      },
    },
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Entry point for the library
      name: 'EventFuzzComponentLibrary', // Global name for the UMD build
      fileName: (format) => `eventfuzz-components-library.${format}.js`, // Output proper file names
      formats: ['es', 'umd'], // Generate both ES and UMD builds
    },
    rollupOptions: {
      external: ['react', /^react\/.*/, 'react-dom', /react-dom\/.*/], // Mark react and react-dom as external
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        entryFileNames: (chunk) => {
          if (chunk.facadeModuleId?.endsWith('index.ts')) {
            return 'eventfuzz-components-library.[format].js'; // Force proper file names
          }
          return '[name].[format].js';
        },
        chunkFileNames: '[name].[format].js', // Format chunk files
        assetFileNames: '[name].[ext]', // Flatten assets (e.g., CSS)
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias for the `src` folder
    },
  },
});
