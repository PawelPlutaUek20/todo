import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todos";
import visibilityFilterReducer from "../reducers/visibilityFilter";

export default configureStore({
  reducer: {
    todos: todoReducer,
    visibilityFilter: visibilityFilterReducer,
  },
});
