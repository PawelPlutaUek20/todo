import React from "react";
import { toggleTodo } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => handleToggle(todo.id)}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </li>
      ))}
    </div>
  );
};

export default TodoList;
