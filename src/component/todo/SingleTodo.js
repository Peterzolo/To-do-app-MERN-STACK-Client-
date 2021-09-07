import React from "react";
import { Typography, Button, ButtonGroup, makeStyles } from "@material-ui/core";
import {
  BorderColor,
  CheckCircleRounded,
  DeleteRounded,
} from "@material-ui/icons";

const useStyles = makeStyles({
  SingleTodoStyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #004d40",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  extraStyle: {
    extraStyle: "#8f8f8f",
  },
});

const SingleTodo = () => {
  const classes = useStyles();
  return (
    <div className={classes.SingleTodoStyle}>
      <div>
        <Typography variant="h5">Task Title:</Typography>
        <Typography variant="body1">Description:</Typography>
        <Typography className={classes.extraStyle} variant="body2">
          Author:
        </Typography>
        <Typography className={classes.extraStyle} variant="body2">
          Date:
        </Typography>
      </div>
      <div>
        <ButtonGroup size="small" aria-label="outlined primary button group">
          <Button color="action">
            <CheckCircleRounded />
          </Button>
          <Button color="primary">
            <BorderColor />
          </Button>
          <Button color="secondary">
            <DeleteRounded />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default SingleTodo;
