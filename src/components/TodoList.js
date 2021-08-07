import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { getVisibleTodos } from "../selectors";
import { List, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  todoList: {
    marginTop: 22,
  },
}));

const TodoList = () => {
  const classes = useStyles();
  const filteredTodos = useSelector(getVisibleTodos);

  return (
    <List className={classes.todoList}>
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </List>
  );
};

export default TodoList;
