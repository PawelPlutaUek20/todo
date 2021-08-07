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
import { darkTheme, lightTheme } from "../theme";

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
  const themeType = useSelector((state) => state.theme);
  const theme = createTheme(themeType === "light" ? lightTheme : darkTheme);

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
