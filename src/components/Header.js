import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, IconButton, Typography } from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import { toggleTheme } from "../reducers/theme";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.only("xs")]: {
      height: 200,
    },
    [theme.breakpoints.up("sm")]: {
      height: 300,
    },
    padding: 24,
    backgroundImage: theme.backgroundImage,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
    [theme.breakpoints.only("xs")]: {
      marginTop: 15,
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: 54,
    },
  },
  title: {
    [theme.breakpoints.only("xs")]: {
      fontSize: 26,
      letterSpacing: 11,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 40,
      letterSpacing: 15,
    },
  },
  icon: {
    [theme.breakpoints.only("xs")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 26,
    },
    transform: "rotate(-200deg)",
    color: "#fff",
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <AppBar className={classes.header} position="static" elevation={0}>
      <Container maxWidth="sm">
        <Grid
          className={classes.container}
          container
          alignItems="baseline"
          justifyContent="space-between"
        >
          <Typography className={classes.title} variant="h2" component="h1">
            Todo
          </Typography>
          <IconButton onClick={handleTheme} aria-label="theme">
            {theme === "light" ? (
              <Brightness3Icon className={classes.icon} />
            ) : (
              <BrightnessHighIcon className={classes.icon} />
            )}
          </IconButton>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
