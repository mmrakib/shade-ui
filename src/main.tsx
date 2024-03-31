import React from 'react'
import ReactDOM from 'react-dom/client'

import TestComponent from '../lib/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <h1>Mango UI</h1>
        <TestComponent />
    </React.StrictMode>,
)
