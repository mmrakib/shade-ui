import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const currentDirName = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), vanillaExtractPlugin()],

    build: {
        lib: {
            entry: resolve(currentDirName, 'lib/index.jsx'),
            name: 'mango-ui',
            fileName: (format) => `mango-ui.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime', '@vanilla-extract/css'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
})
