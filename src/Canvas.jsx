import { canvasDivStyle } from "./Canvas.css"

export default function Canvas({ children }) {
    return (
        <div className={{canvasDivStyle}}>
            {children}
        </div>
    )
}
