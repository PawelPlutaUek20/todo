import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
    color: theme.palette.text.secondary,
    fontSize: 14,
  },
}));

const DndInfo = () => {
  const classes = useStyles();
  return (
    <Typography align="center" className={classes.root}>
      Drag and drop to reorder list
    </Typography>
  );
};

export default DndInfo;
