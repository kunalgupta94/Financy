import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import Nav from './Nav';
import Sidebar from './Sidebar';

const Layout = ({ sideBar, main }) => {
    const classes = useStyles();
    return (
        <div className={classes.layout}>
            <Nav />
            {sideBar ? (
                <div className={classes.main}>
                    <Sidebar>
                        {sideBar}
                    </Sidebar>
                </div>
            ) : null}
            {main ? (
                <div>
                    {main}
                </div>
            ) : null}
        </div>
    );
};

Layout.defaultProps = {
    sideBar: null,
    main: null,
};

Layout.propTypes = {
    sideBar: PropTypes.objectOf(PropTypes.any),
    main: PropTypes.objectOf(PropTypes.any),
};

export default Layout;
