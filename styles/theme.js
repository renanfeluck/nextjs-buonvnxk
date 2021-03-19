import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  root: {
    "& .MuiInputBase-input": {
      color: "#fff", // Text color
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none", // Semi-transparent underline
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: "none", // Solid underline on hover
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none", // Solid underline on focus
    },
    "&.MuiFilledInput-underline:before": {
      borderBottom: "none", // Solid underline on focus
    },
    ".MuiFilledInput-underline:before": {
      border: "none",
    },
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       "@font-face": [Montserrat],
  //     },
  //   },
  // },
});

export default theme;
