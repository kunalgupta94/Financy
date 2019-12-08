import React from "react";
import useStyles from "./styles";
import { Link } from 'react-router-dom'

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
