import { ReactNode } from 'react';

import { canvasStyle } from "./Canvas.css.ts"

interface CanvasProps {
    children: ReactNode
}

function Canvas({ children }: CanvasProps) {
    return (
        <div className={canvasStyle}>
            { children }
        </div>
    )
}

export default Canvas
