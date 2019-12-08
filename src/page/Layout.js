import React from "react";
import useStyles from "./styles";
import Nav from './Nav'
import Sidebar from './Sidebar'

const Layout = ({sideBar, main}) => {
    const classes = useStyles()
  return (
    <div className={classes.layout}>
      <Nav />
      {sideBar ? <div className={classes.main}>
        <Sidebar>
            {sideBar}
        </Sidebar>
      </div> : null}
      {main ? <div>
          {main}
        </div> : null}
    </div>
  );
};

export default Layout;
