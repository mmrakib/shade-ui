import { canvasDivStyle } from "./Canvas.css.jsx"

export default function Canvas({ children }) {
    return (
        <div className={canvasDivStyle}>
            {children}
        </div>
    )
}
