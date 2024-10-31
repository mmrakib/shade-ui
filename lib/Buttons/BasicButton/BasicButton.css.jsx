import { style } from '@vanilla-extract/css'

export const basicButtonStyle = style({
    backgroundColor: '#4f46e5',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, transform 0.2s ease',

    ':hover': {
    backgroundColor: '#4338CA', // Indigo-700
    transform: 'scale(1.05)', // Slightly enlarge on hover
    },

    ':focus': {
        outline: '2px solid #3B82F6', // Blue-500
        outlineOffset: '2px',
    },

    ':disabled': {
        backgroundColor: '#A1A1AA', // Gray-400
        cursor: 'not-allowed',
    },
})
