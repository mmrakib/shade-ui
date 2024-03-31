import React from 'react'
import ReactDOM from 'react-dom/client'

import Canvas from './Canvas.tsx'

import { TestComponent } from '../lib/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Canvas>
            <TestComponent />
        </Canvas>
    </React.StrictMode>,
)
