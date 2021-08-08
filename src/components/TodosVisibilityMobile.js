import { Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import TodosVisibility from "./TodosVisibility";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("xs")]: {
      height: 48,
      "& .MuiTypography-body1": {
        fontSize: 14,
      },
    },
    backgroundColor: theme.palette.background.paper,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    borderRadius: 4,
  },
}));

const TodosVisibilityMobile = () => {
  const classes = useStyles();
  return (
    <Hidden smUp>
      <Grid className={classes.root}>
        <TodosVisibility />
      </Grid>
    </Hidden>
  );
};

export default TodosVisibilityMobile;
