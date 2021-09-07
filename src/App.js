import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Todos from "./component/todo/Todos";
import Login from "./component/user/Login";
import Register from "./component/user/Register";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  backgroundstyle: {
    backgroundColor: "#f5f5f5",
  },
  containerStyle: {
    margin: "30px auto",
  },
});

export const App = () => {
  const classes = useStyles();
  return (
    <>
      <Router>
        <Container maxWidth="md" className={classes.backgroundstyle}>
          <Navbar />
          <Container className={classes.containerStyle} maxWidth = "sm">
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/" component={Todos} />
            </Switch>
          </Container>
        </Container>
      </Router>
    </>
  );
};

export default App;
