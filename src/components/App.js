import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterTodos from "./FilterTodos";
import Header from "./Header";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { useSelector } from "react-redux";

const App = () => {
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
        <AddTodo />
        <TodoList />
        <FilterTodos />
      </>
    </ThemeProvider>
  );
};

export default App;
