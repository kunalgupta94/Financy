import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    profilePicDiv: {
        postion: 'relative',
        overflow: 'hidden',
        height: '150px',
        width: '150px',
        borderRadius: '50%',
        margin: 'auto',
        marginTop: '80px',
        border: '2px solid #C0C5CE',
        boxSizing: 'border-box',
    },
    profilePic: {
        width: '100%',
    },
    customerName: {
        fontFamily: 'Raleway, sans-serif',
        color: '#e8e8e8',
        textAlign: 'center',
        marginBottom: '0',
    },
    customerType: {
        color: '#8DD881',
        fontFamily: 'Raleway, sans-serif',
        textAlign: 'center',
    },
});

export default useStyles;
