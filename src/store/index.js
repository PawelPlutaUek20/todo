import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todos";
import visibilityFilterReducer from "../reducers/visibilityFilter";
import themeReducer from "../reducers/theme";

export default configureStore({
  reducer: {
    todos: todoReducer,
    visibilityFilter: visibilityFilterReducer,
    theme: themeReducer,
  },
});
