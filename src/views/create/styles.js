import { createUseStyles } from "react-jss";

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
  buttonWrapper: {
    display: "block"
  },
  customerDetails: {
    
  }
});

export default useStyles;
