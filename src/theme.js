const br = [320, 480, 768, 1200];

export const mq = br.map(bp => `@media (min-width: ${bp}px)`);

export const theme = {
    colors: {
        mainText: '#2f2f37',
        background: '#e2e5e8',
        white: '#fff',
        accent: '#2063e4',
        error: 'red',
    },
    space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
        body: 'system-ui, sans-serif',
        heading: 'Cantarell, sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: {
        xs: '12px',
        s: '14px',
        m: '16px',
        l: '20px',
        xl: '64px',
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
    },
    lineHeights: {
        // body: 1.5,
        // heading: 1.125,
    },
    sizes: {
        minWidth: '288px',
        mediumWidth: '512px',
        maxWidth: '768px',
    },
    borders: {
        none: 'none',
        normal: '1px solid #2f2f37',
        button: '1px solid #c9c5c5',
    },
    radii: {
        none: '0',
        normal: '4px',
        box: '8px',
        round: '50%',
    },
    shadows: {
        button: '1px 2px 2px 0 rgb(0 0 0 / 0.5)',
        box: 'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px'
    },
    transition: {
        main: '300ms linear',
    },   
};