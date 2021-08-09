import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { getVisibleTodos } from "../selectors";
import { List, makeStyles } from "@material-ui/core";
import FilterTodos from "./FilterTodos";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { reorderTodos } from "../reducers/todos";

const useStyles = makeStyles((theme) => ({
  todoList: {
    [theme.breakpoints.only("xs")]: {
      margin: "8px 0",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: 14,
    },
  },
}));

const TodoList = () => {
  const classes = useStyles();
  const filteredTodos = useSelector(getVisibleTodos);
  const dispatch = useDispatch();

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    dispatch(
      reorderTodos(filteredTodos, result.source.index, result.destination.index)
    );
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <List
            className={classes.todoList}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {filteredTodos.map((todo, todoIdx) => (
              <Todo key={todo.id} index={todoIdx} {...todo} />
            ))}
            {provided.placeholder}
            <FilterTodos />
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
