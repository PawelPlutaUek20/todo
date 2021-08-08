import { createSelector } from "reselect";
import { darkTheme, lightTheme } from "../theme";

const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodos = (state) => state.todos;
const getThemeType = (state) => state.theme;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case "All":
        return todos;
      case "Completed":
        return todos.filter((t) => t.completed);
      case "Active":
        return todos.filter((t) => !t.completed);
      default:
        throw new Error("Unknown filter: " + visibilityFilter);
    }
  }
);

export const getTodosLeft = createSelector([getTodos], (todos) =>
  todos.reduce((count, todo) => (!todo.completed ? count + 1 : count), 0)
);

export const getTheme = createSelector(getThemeType, (themeType) => {
  switch (themeType) {
    case "light":
      return lightTheme;
    case "dark":
      return darkTheme;
    default:
      throw new Error("Unknown theme: " + themeType);
  }
});
