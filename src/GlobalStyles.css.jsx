import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
    height: '100%',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
});

globalStyle('*', {
    boxSizing: 'inherit',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
    margin: 0,
});

globalStyle('p', {
    margin: 0,
});
