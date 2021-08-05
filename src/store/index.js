import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todos";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
