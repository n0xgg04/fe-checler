//! Define theme goes here !!!!!!!!!
const themeDefine = {
  palette: {
    primary: {
      main: "#060045",
      light: "#ff5c00",
      dark: "#d9d9d9",
      gray: "#d9d9d9",
      black: "#000000",
    },
    secondary: {
      main: "#3f51b5",
    },
    gray: {
      300: "#e0e0e0",
    },
  },
  typography: {
    fontFamily: "Public Sans",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
};

export default themeDefine;
