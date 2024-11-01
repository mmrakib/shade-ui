import { buttonStyle } from "./Button.css.jsx"

export default function Button({ children, onClick, disabled,}) {
    return (
        <button
            className={buttonStyle}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
