import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVisibilityFilter } from "../reducers/visibilityFilter";
import { Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.text.secondary,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.action.hover,
    },
    margin: "0px 8px",
  },
  selected: {
    color: "hsl(220, 98%, 61%)",
  },
  container: {
    display: "flex",
  },
}));

const TodosVisibility = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const visibilityFilter = useSelector((state) => state.visibilityFilter);

  const handleFilter = (filter) => {
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <Grid className={classes.container}>
      {["All", "Active", "Completed"].map((filter) => {
        return (
          <Typography
            className={`${classes.button} ${
              visibilityFilter === filter ? classes.selected : null
            }`}
            key={filter}
            onClick={() => handleFilter(filter)}
          >
            {filter}
          </Typography>
        );
      })}
    </Grid>
  );
};

export default TodosVisibility;
