import React from "react";
import { toggleTodo } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => handleToggle(todo.id)} />
      ))}
    </div>
  );
};

export default TodoList;
