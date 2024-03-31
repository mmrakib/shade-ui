import { defineConfig } from 'vite'

import { resolve } from 'path'

import react from '@vitejs/plugin-react-swc'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
    plugins: [react(), vanillaExtractPlugin()],
    
    server: {
        open: true,
        watch: {
            // Despite high CPU utilization, polling is required to work w/ WSL2.
            // Disable if you are not developing w/ WSL2.
            usePolling: true
        },
    },

    build: {
        lib: {
            entry: resolve(__dirname, 'lib/index.tsx'),
            name: 'Mango',
            fileName: 'mango',
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
})
