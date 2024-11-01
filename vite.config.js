// Vite imports
import { defineConfig } from "vite"

// Plugin imports
import react from "@vitejs/plugin-react-swc"
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// Utility imports
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

//
// Constants
//
const CURRENT_DIR_NAME = dirname(fileURLToPath(import.meta.url))
const PACKAGE_NAME = 'atlas-ui'
const LIB_MAIN_FILE = 'lib/index.jsx'

//
// Configuration
//
export default defineConfig({
    plugins: [react(), vanillaExtractPlugin()],
    build: {
        lib: {
            entry: resolve(CURRENT_DIR_NAME, LIB_MAIN_FILE),
            name: PACKAGE_NAME,
            fileName: (format) => `${PACKAGE_NAME}.${format}.js`,
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
