import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
    height: '100%', // Ensure body takes full height
    margin: 0, // Remove default margin
    padding: 0, // Remove default padding
    boxSizing: 'border-box', // Include padding and border in element's total width and height
});

globalStyle('*', {
    boxSizing: 'inherit', // Inherit box-sizing for all elements
});

// Optional: Additional resets
globalStyle('h1, h2, h3, h4, h5, h6', {
    margin: 0, // Remove default margin from headings
});

globalStyle('p', {
    margin: 0, // Remove default margin from paragraphs
});
