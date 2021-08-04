import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </div>
  );
};

export default TodoList;
