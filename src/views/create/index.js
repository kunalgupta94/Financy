import React, { useState, useEffect } from "react";
import Customer from "./Customer";
import { createUseStyles } from "react-jss";
import commonStyle from "../../commonStyle";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { all } from "q";

const useStyles = createUseStyles({
  container: {
    width: "40%",
    padding: "20px",
    margin: "90px auto",
    textAlign: "center",
    background: "rgb(207, 207, 207)",
    borderRadius: "8px"
  },
  buttonText: {
    margin: "0 20px"
  },
  searchInput: {
    width: "100%",
    fontSize: "1.2em",
    margin: "0",
    border: "none"
  },
  button: {
    display: "block",
    background: "none",
    border: "none",
    margin: "auto",
    "&:focus": {
      outline: "none"
    },
    "&:hover": {
      cursor: "pointer"
    },
    padding: "5px"
  },
  arrow: {
    display: "inline-block",
    width: "20px",
    height: "20px",
    border: "8px solid",
    "border-bottom": "0",
    "border-left": "0",
    "border-radius": "1px"
  },
  up: {
    transform: "rotate(-45deg)"
  },
  down: {
    transform: "rotate(135deg)"
  },
  buttonWrapper: {
    display: "block"
  },
  overlay: {
    display: "block",
    position: "absolute",
    margin: "5px 0",
    background: "white",
    zIndex: "1",
    width: "100%",
    listStyle: "none",
    textAlign: "left",
    padding: "0",
    border: "1px solid rgb(180,180,180)",
    "& > li": {
      padding: "10px",
      cursor: "pointer",
      "&:hover": {
        background: "rgb(66, 109, 138)",
        color: "white"
      }
    }
  },
  toggleOverlay: {
    display: "hidden"
  },
  searchContainer: {
    position: "relative",
    width: "100%",
    background: "white"
  }
});

const allCustomers = value => gql`
query {
  customer(name: "${value}") {
    id
    name
    cases {
      id
      amount
      createdOn
      fileCharges
      interest
      status
    }
    type
    phoneNumber
    address
    documentSubmitted
  }
}
`;

const Create = () => {
  const [exisiting, setExisiting] = useState(true);
  const [allCustomer, setAllCustomers] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState({});
  const classes = useStyles();
  const commonClasses = commonStyle();
  const getCustomers = useQuery(allCustomers(searchInput));

  useEffect(
    () =>
      window.addEventListener("click", e => {
        if (e.target.id !== "autocomplete") {
          return document.getElementById("overlay")
            ? (document.getElementById("overlay").style.display = "none")
            : null;
        }
        return null;
      }),
    []
  );

  const handleSearchInput = e => {
    setSearchInput(e.target.value);
    if (e.target.value.length > 2) {
      setAllCustomers(getCustomers.data);
    } else {
      setAllCustomers({});
    }
  };

  const handleInputClick = () =>
    document.getElementById("overlay")
      ? (document.getElementById("overlay").style.display = "block")
      : null;

  const handleOptionClick = cust => {
    setSearchInput(cust.name);
    setSelectedCustomer(cust);
    console.log(selectedCustomer);
  };

  return (
    <div className={classes.container}>
      {!exisiting ? (
        <div>
          <div className={classes.buttonWrapper}>
            <button
              onClick={() => setExisiting(true)}
              className={classes.button}
            >
              <span className={`${classes.arrow} ${classes.up}`}></span>
              <h3 className={classes.buttonText}>Exisiting Customer</h3>
            </button>
          </div>
          <Customer />
        </div>
      ) : null}
      {exisiting ? (
        <div>
          <div className={classes.searchContainer}>
            <input
              type="text"
              className={`${commonClasses.textInput} ${classes.searchInput}`}
              placeholder="Search Customer"
              id="autocomplete"
              onChange={e => handleSearchInput(e)}
              value={searchInput}
              onClick={() => handleInputClick()}
              autoComplete="off"
            />

            {allCustomer.customer ? (
              <ul id="overlay" className={classes.overlay}>
                {allCustomer.customer.map(cust => (
                  <li
                    onClick={handleOptionClick.bind(this, cust)}
                    value={cust.name}
                    key={cust.id}
                  >
                    {cust.name}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className={classes.buttonWrapper}>
            <button
              onClick={() => setExisiting(false)}
              className={classes.button}
            >
              <h3 className={classes.buttonText}>New Customer</h3>
              <span className={`${classes.arrow} ${classes.down}`}></span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Create;
