import { buttonStyle } from "./Button.css.jsx"

export default function BasicButton({ children, onClick, disabled }) {
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
