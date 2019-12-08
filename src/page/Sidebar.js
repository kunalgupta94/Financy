import React from 'react'
import useStyles from './styles'
const Sidebar = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            {children}
        </div>
    )
}

export default Sidebar
