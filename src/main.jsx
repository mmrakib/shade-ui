// React imports
import React from 'react'
import { createRoot } from 'react-dom/client'

// Global styles import
import './global.scss'

// Canvas import
import Canvas from './Canvas.jsx'

// Test component imports
import { Button } from '../lib/index.jsx'

//
// Rendering
//
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Canvas>
            <Button onClick={() => alert('Hello, world!')}>
                Click me!
            </Button>
        </Canvas>
    </React.StrictMode>
)
