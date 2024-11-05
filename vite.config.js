// Vite imports
import { defineConfig } from "vite"

// Plugin imports
import react from "@vitejs/plugin-react-swc"

// Utility imports
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

//
// Constants
//
const CURRENT_DIR_NAME = dirname(fileURLToPath(import.meta.url))
const PACKAGE_NAME = 'shade-ui'
const LIB_MAIN_FILE = 'lib/index.jsx'

//
// Configuration
//
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(CURRENT_DIR_NAME, LIB_MAIN_FILE),
            name: PACKAGE_NAME,
            fileName: (format) => `${PACKAGE_NAME}.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
})
