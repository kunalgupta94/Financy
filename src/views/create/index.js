import React, { useState, useEffect } from "react";
import CreateCase from "./CreateCase";
import CreateCustomer from "./CreateCustomer";
import useStyles from "./styles";

const Create = () => {
  const [exisiting, setExisiting] = useState(true);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {!exisiting ? <CreateCustomer setExisiting={setExisiting} /> : null}
      {exisiting ? <CreateCase setExisiting={setExisiting} /> : null}
    </div>
  );
};

export default Create;
