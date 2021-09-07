import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  navbarStyle: {
    backgroundColor: "#004d40",
  },
  linkStyle: {
    color: "white",
    textDecoration: "none",
  },
  notifyStyle: {
    flexGrow: 1,
  },
  signOut: {
    color: "#bbdefb",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleSignOut = () => {
    history.push("/login");
  };
  const handleSignIn = () => {
    history.push("/login");
  };
  const handleSignUp = () => {
    history.push("/register");
  };

  return (
    <div>
      <AppBar position="static" className={classes.navbarStyle}>
        <Toolbar>
          <Typography variant="h4" className={classes.notifyStyle}>
            <Link className={classes.linkStyle} to="/">
              Task App
            </Link>
          </Typography>
          <Typography variant="h5" className={classes.notifyStyle}>
            You are welcome : Peter Solomon
          </Typography>
          <Button onClick={() => handleSignOut()} className={classes.signOut}>
            Sign Out
          </Button>
          <Button onClick={() => handleSignIn()} className={classes.signOut}>
            Sign In
          </Button>
          <Button onClick={() => handleSignUp()} className={classes.signOut}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
