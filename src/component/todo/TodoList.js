import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import SingleTodo from "./SingleTodo";

const useStyles = makeStyles({
  listStyles: {
    margin: "20px  auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 12px -3px #00695c",
  },
});

const TodoList = () => {
  const classes = useStyles();
  return (
    <div className={classes.listStyles}>
      <Typography variant="5">List of Tasks</Typography>
      <SingleTodo />
      <SingleTodo />
    </div>
  );
};

export default TodoList;
