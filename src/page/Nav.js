import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Nav = () => {
    const classes = useStyles();
    return (
        <div className={classes.nav}>
            <div className={classes.logo}>Financy</div>
            <Link to="/customer">Customer</Link>
        </div>
    );
};

export default Nav;
