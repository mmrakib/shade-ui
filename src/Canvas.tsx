import { ReactNode } from 'react';

import { CanvasStyle } from "./Canvas.css.ts"

interface CanvasProps {
    children: ReactNode
}

function Canvas({ children }: CanvasProps) {
    return (
        <div className={CanvasStyle}>
            { children }
        </div>
    )
}

export default Canvas
