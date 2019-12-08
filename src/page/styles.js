import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    layout: {
        display: 'grid',
        height: '100%',
        'grid-template-rows': '60px auto',
    },
    main: {
        display: 'grid',
        'grid-template-columns': '300px auto',
    },
    nav: {
        boxShadow: '10px 0px 20px 3px rgba(0,0,0,0.4)',
        backgroundColor: '#33AF90',
        width: '100%',
        zIndex: 1,
    },
    sidebar: {
        width: '100%',
        height: '100%',
        'background-image': 'linear-gradient(to right top, #282c33, #33373e, #3e4249, #494d55, #555961)',
    },
    logo: {
        fontFamily: 'Roboto',
        display: 'inline-block',
        margin: '20px',
        color: 'white',
    },
});

export default useStyles;
