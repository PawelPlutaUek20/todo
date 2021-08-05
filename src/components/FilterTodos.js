import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVisibilityFilter } from "../reducers/visibilityFilter";
import { getTodosLeft } from "../selectors";

const FilterTodos = () => {
  const dispatch = useDispatch();
  const itemsLeft = useSelector(getTodosLeft);

  const handleFilter = (filter) => {
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <div>
      {["All", "Active", "Completed"].map((filter) => {
        return (
          <button key={filter} onClick={() => handleFilter(filter)}>
            {filter}
          </button>
        );
      })}
      <p>{itemsLeft} items left</p>
    </div>
  );
};

export default FilterTodos;
