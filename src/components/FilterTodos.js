import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVisibilityFilter } from "../reducers/visibilityFilter";
import { clearCompleted } from "../reducers/todos";
import { getTodosLeft } from "../selectors";

const FilterTodos = () => {
  const dispatch = useDispatch();
  const itemsLeft = useSelector(getTodosLeft);

  const handleFilter = (filter) => {
    dispatch(setVisibilityFilter(filter));
  };

  const handleClear = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <div>
        <p>{itemsLeft} items left</p>
      </div>
      <div style={{ paddingBottom: 16 }}>
        {["All", "Active", "Completed"].map((filter) => {
          return (
            <button key={filter} onClick={() => handleFilter(filter)}>
              {filter}
            </button>
          );
        })}
      </div>
      <div>
        <button onClick={handleClear}>Clear Completed</button>
      </div>
    </div>
  );
};

export default FilterTodos;
