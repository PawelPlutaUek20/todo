import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todos";

const AddTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      dispatch(addTodo({ text: event.target.value }));
      event.target.value = null;
    }
  };

  return (
    <div>
      <input onKeyDown={handleSubmit} />
    </div>
  );
};

export default AddTodo;
