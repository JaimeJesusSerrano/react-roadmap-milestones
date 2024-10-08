import { defineConfig } from 'vite'
import { checker } from 'vite-plugin-checker'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'

import { peerDependencies } from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts', // Specifies the entry point for building the library
      name: 'react-roadmap-milestones', // Sets the name of the generated library.
      fileName: format => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ['cjs', 'es'], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup building.
    },
    sourcemap: false, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
    }),
    dts({ // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: './tsconfig.json',
    }),
  ],
})
