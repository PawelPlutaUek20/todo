import React from "react";

const Todo = ({ handleToggle, handleDelete, completed, text }) => (
  <div style={{ display: "table-row" }}>
    <li
      onClick={handleToggle}
      style={{
        textDecoration: completed ? "line-through" : "none",
        display: "table-cell",
      }}
    >
      {text}
    </li>
    <span
      onClick={handleDelete}
      style={{ display: "table-cell", padding: "4px 16px" }}
    >
      x
    </span>
  </div>
);

export default Todo;
