import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { getVisibleTodos } from "../selectors";

const TodoList = () => {
  const filteredTodos = useSelector(getVisibleTodos);

  return (
    <div>
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
