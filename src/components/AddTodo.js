import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
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

export default connect()(AddTodo);
