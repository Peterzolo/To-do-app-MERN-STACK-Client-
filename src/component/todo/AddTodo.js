import React from "react";
import { TextField, Typography } from "@material-ui/core";
import { SendRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  submitBtnStyle: {
    backgroundColor: "#009688",
    marginTop: "5px",
    //borderRadius: "10px",
    maxWidth: "200px",
  },
  formStyles: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 12px -3px #00695c",
  },
  inputSpace: { marginTop: "20px" },
  titleStyle: { color: "#009688", textAlign: "center" },
});

const AddTodo = () => {
  const classes = useStyles();

  const [todo, setTodo] = useState({
    name: "",
    description: "",
    isComplete: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    setTodo({
      name: "",
      description: "",
      isComplete: false,
    });
  };

  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyles}
        onSubmit={handleSubmit}
      >
        <Typography variant="subtitle1" className={classes.titleStyle}>
          Enter Task Here
        </Typography>
        <TextField
          className={classes.inputSpace}
          id="add-todo"
          label="Add Task"
          autoFocus
          fullWidth
          variant="filled"
          value={todo.name}
          onChange={(e) =>
            setTodo({ ...todo, name: e.target.value, date: new Date() })
          }
        />
        <TextField
          className={classes.inputSpace}
          id="add-description"
          label="Enter description"
          variant="filled"
          multiline
          minRows={5}
          maxRows={10}
          fullWidth
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
        <button
          className={classes.submitBtnStyle}
          variant="contained"
          type="submit"
        >
          <SendRounded />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
