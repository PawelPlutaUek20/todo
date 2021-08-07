import {
  ListItem,
  makeStyles,
  Divider,
  IconButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../reducers/todos";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 65,
    justifyContent: "space-between",
    fontSize: 18,
  },
  completed: {
    textDecoration: "line-through",
  },
  checkbox: {
    "& .MuiIconButton-label": {
      paddingLeft: 1,
    },
  },
}));

const Todo = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleToggle = () => {
    dispatch(toggleTodo({ id }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <>
      <ListItem
        className={`${classes.root} ${completed ? classes.completed : null}`}
      >
        <ListItemIcon onClick={handleToggle}>
          <Checkbox
            className={classes.checkbox}
            edge="start"
            checked={completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": id }}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CircleCheckedFilled />}
          />
        </ListItemIcon>
        <ListItemText id={id} primary={text} />
        <ListItemSecondaryAction>
          <IconButton onClick={handleDelete} edge="end" aria-label="comments">
            <CloseIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
};

export default Todo;
