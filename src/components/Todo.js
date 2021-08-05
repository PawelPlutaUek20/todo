import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../reducers/todos";

const Todo = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo({ id }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <li
        onClick={handleToggle}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {text}
      </li>
      <span onClick={handleDelete} style={{ padding: "4px 16px" }}>
        x
      </span>
    </div>
  );
};

export default Todo;
