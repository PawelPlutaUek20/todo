import React from "react";
import { toggleTodo, deleteTodo } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div style={{ display: "table" }}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          handleToggle={() => handleToggle(todo.id)}
          handleDelete={() => handleDelete(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
