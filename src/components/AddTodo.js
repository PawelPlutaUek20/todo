import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      dispatch(addTodo(event.target.value));
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
