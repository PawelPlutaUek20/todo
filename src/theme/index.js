const baseTheme = {
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
};

export const darkTheme = {
  ...baseTheme,
  palette: {
    type: "dark",
    text: {
      primary: "hsl(234, 39%, 85%)",
    },
    action: {
      disabledBackground: "hsl(234, 11%, 52%)",
    },
    background: {
      default: "hsl(235, 21%, 11%)",
      paper: "hsl(235, 24%, 19%)",
    },
    divider: "hsl(237, 14%, 26%)",
  },
};

export const lightTheme = {
  ...baseTheme,
  palette: {
    type: "light",
    text: {
      primary: "hsl(235, 19%, 35%)",
    },
    action: {
      disabledBackground: "hsl(233, 11%, 84%)",
    },
    background: {
      default: "hsl(0, 0%, 98%)",
    },
    divider: "hsl(236, 33%, 92%)",
  },
};
