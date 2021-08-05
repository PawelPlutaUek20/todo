import { createSelector } from "reselect";

const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodos = (state) => state.todos;

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
