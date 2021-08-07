import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todos";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      backgroundColor: theme.palette.background.paper,
      "&:focus-within": {
        "& .MuiInputAdornment-root": {
          color: theme.palette.text.primary,
          transition: "transform 0.2s ease 0s",
          transform: "scale(1.1)",
        },
      },
    },
    "& .MuiInputBase-input": {
      [theme.breakpoints.only("xs")]: {
        height: 11,
        fontSize: 12,
      },
      [theme.breakpoints.up("sm")]: {
        height: 27,
        fontSize: 18,
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderWidth: 0,
      },
      "&.Mui-focused fieldset": {
        borderWidth: 0,
      },
    },
    "& .MuiInputAdornment-root": {
      [theme.breakpoints.only("xs")]: {
        marginRight: theme.spacing(1.5),
      },
      [theme.breakpoints.up("sm")]: {
        marginRight: theme.spacing(3),
      },
      color: theme.palette.action.disabledBackground,
      transition: "transform 0.2s ease 0s",
      transform: "scale(1)",
    },
  },
}));

const AddTodo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      dispatch(addTodo({ text: event.target.value }));
      event.target.value = null;
    }
  };

  return (
    <TextField
      className={classes.root}
      placeholder="Create a new todo..."
      onKeyDown={handleSubmit}
      fullWidth
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <RadioButtonUncheckedIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default AddTodo;
