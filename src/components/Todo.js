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
    [theme.breakpoints.only("xs")]: {
      height: 53,
      "& .MuiTypography-body1": {
        fontSize: 12,
      },
    },
    [theme.breakpoints.up("sm")]: {
      height: 65,
      "& .MuiTypography-body1": {
        [theme.breakpoints.only("xs")]: {
          fontSize: 18,
        },
      },
    },
    backgroundColor: theme.palette.background.paper,
    justifyContent: "space-between",
  },
  completed: {
    textDecoration: "line-through",
    color: theme.palette.action.disabledBackground
  },
  checkbox: {
    "& .MuiIconButton-label": {
      paddingLeft: 1,
    },
  },
  icon: {
    [theme.breakpoints.only("xs")]: {
      minWidth: 34,
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: 46,
    },
  },
  button: {
    color: theme.palette.action.disabledBackground,
  }
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
        <ListItemIcon className={classes.icon} onClick={handleToggle}>
          <Checkbox
            className={`${classes.checkbox} ${classes.button}`}
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
          <IconButton className={classes.button} onClick={handleDelete} edge="end" aria-label="comments">
            <CloseIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
};

export default Todo;
