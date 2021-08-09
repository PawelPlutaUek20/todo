import {
  ListItem,
  makeStyles,
  IconButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../reducers/todos";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import { Draggable } from "react-beautiful-dnd";

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
        fontSize: 16,
      },
    },
    backgroundColor: theme.palette.background.paper,
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  completed: {
    textDecoration: "line-through",
    color: theme.palette.action.disabledBackground,
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
  },
  delete: {
    justifyContent: "flex-end",
  },
}));

const Todo = ({ id, text, completed, index }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleToggle = () => {
    dispatch(toggleTodo({ id }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <Draggable key={id} draggableId={id.toString()} index={index}>
      {(provided) => (
        <ListItem
          className={`${classes.root} ${completed ? classes.completed : null}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ListItemIcon className={classes.icon} onClick={handleToggle}>
            <Checkbox
              className={`${classes.checkbox} ${classes.button}`}
              edge="start"
              color="primary"
              checked={completed}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": id }}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CircleCheckedFilled />}
            />
          </ListItemIcon>
          <ListItemText id={id} primary={text} />
          <ListItemIcon className={classes.delete}>
            <IconButton
              className={classes.button}
              onClick={handleDelete}
              edge="end"
              aria-label="delete"
            >
              <CloseIcon />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      )}
    </Draggable>
  );
};

export default Todo;
