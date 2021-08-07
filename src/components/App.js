import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterTodos from "./FilterTodos";
import Header from "./Header";
import {
  Container,
  createTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.only("xs")]: {
      marginTop: -116,
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: -165,
    },
    padding: 24,
  },
}));

const App = () => {
  const classes = useStyles();
  const theme = createTheme({
    palette: {
      type: useSelector((state) => state.theme),
    },
    typography: {
      fontFamily: "Josefin Sans, sans-serif",
      fontWeightLight: 400,
      fontWeightBold: 700,
      h2: {
        fontWeight: "bold",
        textTransform: "uppercase",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            minWidth: 320,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Header />
        <Container maxWidth="sm" className={classes.container}>
          <AddTodo />
          <TodoList />
          <FilterTodos />
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
