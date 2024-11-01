import { style } from '@vanilla-extract/css'

export const buttonStyle = style({
    backgroundColor: '#6b6969',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, transform 0.2s ease',

    ':hover': {
        backgroundColor: '#615c5c', 
        transform: 'scale(1.05)',
    },

    ':focus': {
        outline: `2px solid #615c5c`,
        outlineOffset: '2px',
    },

    ':disabled': {
        backgroundColor: '#b0aeae',
        cursor: 'not-allowed',
    },
})
