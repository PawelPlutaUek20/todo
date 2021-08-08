import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Header from "./Header";
import {
  Container,
  createTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { getTheme } from "../selectors";
import TodosVisibilityMobile from "./TodosVisibilityMobile";

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
  const theme = createTheme(useSelector(getTheme));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Header />
        <Container maxWidth="sm" className={classes.container}>
          <AddTodo />
          <TodoList />
          <TodosVisibilityMobile />
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
