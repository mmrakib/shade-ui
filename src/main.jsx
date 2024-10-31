import React from 'react'
import { createRoot } from 'react-dom/client'

import './GlobalStyles.css.jsx'
import Canvas from './Canvas.jsx'

import { BasicButton } from '../lib/index.jsx'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Canvas>
            <BasicButton onClick={() => alert('Hello, world!')}>
                Click me!
            </BasicButton>
        </Canvas>
    </React.StrictMode>
)
