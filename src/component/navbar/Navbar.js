import { AppBar, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

useStyles = makeStyles({
  navbarStyle: {
    backgroundColor: "red",
  },
});

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Typography variant="h4">
          <Link to="/">Task App</Link>
        </Typography>
      </AppBar>
    </div>
  );
};

export default Navbar;
