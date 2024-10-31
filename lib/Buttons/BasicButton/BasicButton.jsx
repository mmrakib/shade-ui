import { basicButtonStyle } from "./BasicButton.css.jsx"

export default function BasicButton({ children, onClick, disabled }) {
    return (
        <button
            className={basicButtonStyle}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
