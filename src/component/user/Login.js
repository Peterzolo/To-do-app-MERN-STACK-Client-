import React from "react";
import { Link } from "react-router-dom";

import {
  Typography,
  Button,
  makeStyles,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles({
  userFormStyle: {
    margin: "20px auto",
    padding: "20px",
    boxShadow: "0px 0px 12px -3px #00695c",
    borderRadius: "10px",
  },
  inputSpace: { marginTop: "20px" },
});

const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.userFormStyle} noValidate autoComplete="off">
        <Typography variant="h4">Sign In</Typography>
        <TextField
          className={classes.inputSpace}
          id="email"
          label="Enter Email"
          variant="filled"
          fullWidth
          autoFocus
        />
        <TextField
          className={classes.inputSpace}
          id="password"
          label="Enter Password"
          variant="filled"
          type="password"
          fullWidth
          autoFocus
        />
        <Button className={classes.inputSpace} variant="outlined" type="submit">
          LogIn
        </Button>
      </form>
      <div>
        Yet to have an account? <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
