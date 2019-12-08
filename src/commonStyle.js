import { createUseStyles } from 'react-jss';

const commonStyle = createUseStyles({
    textInput: {
        margin: '5px 5px',
        padding: '10px 10px',
        border: 'none',
        borderRadius: '2px',
        '&:focus': {
            outline: 'none',
            border: 'none',
            boxShadow: '0 0 0px 3px rgba(82, 158, 247, 0.4)',
            borderRadius: '2px',
        },
    },
    inputField: {
        display: 'block',
        margin: '10px 0px',
    },
    arrow: {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        border: '8px solid',
        'border-bottom': '0',
        'border-left': '0',
        'border-radius': '1px',
    },
    up: {
        transform: 'rotate(-45deg)',
    },
    down: {
        transform: 'rotate(135deg)',
    },
});

export default commonStyle;
