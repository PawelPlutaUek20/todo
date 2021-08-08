import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "../reducers/todos";
import { getTodosLeft } from "../selectors";
import { ListItem, Typography, makeStyles, Hidden } from "@material-ui/core";
import TodosVisibility from "./TodosVisibility";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("xs")]: {
      height: 48,
      "& .MuiTypography-body1": {
        fontSize: 12,
      },
    },
    [theme.breakpoints.up("sm")]: {
      height: 52,
      "& .MuiTypography-body1": {
        fontSize: 14,
        margin: "0 8px",
      },
    },
    backgroundColor: theme.palette.background.paper,
    justifyContent: "space-between",
    color: theme.palette.text.secondary,
  },
  button: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.action.hover,
    },
  },
}));

const FilterTodos = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const itemsLeft = useSelector(getTodosLeft);

  const handleClear = () => {
    dispatch(clearCompleted());
  };

  return (
    <ListItem className={classes.root}>
      <Typography>{itemsLeft} items left</Typography>
      <Hidden xsDown>
        <TodosVisibility />
      </Hidden>
      <Typography className={classes.button} onClick={handleClear}>
        Clear Completed
      </Typography>
    </ListItem>
  );
};

export default FilterTodos;
