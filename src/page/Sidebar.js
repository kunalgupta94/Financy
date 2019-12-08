import React from 'react';
import PropType from 'prop-types';
import useStyles from './styles';

const Sidebar = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            {children}
        </div>
    );
};

Sidebar.propTypes = {
    children: PropType.objectOf(PropType.any).isRequired,
};

export default Sidebar;
