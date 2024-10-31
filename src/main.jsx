import React from 'react'
import ReactDOM from 'react-dom'

import Canvas from './Canvas.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Canvas>
            <h1>This is a test.</h1>
        </Canvas>
    </React.StrictMode>
)
