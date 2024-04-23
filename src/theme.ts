import { createTheme } from "@mui/material/styles";

export const themeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#009ddc",
      dark: "#1f78b4",
    },
    secondary: {
      main: "#1f78b4",
    },
    success: {
      main: "#59e1ac",
    },
    warning: {
      main: "#e5af74",
    },
    error: {
      main: "#ed6a5a",
    },
    info: {
      main: "#009ddc",
    },
  },
  typography: {
    fontFamily: "Montserrat, Sans-Serif",
    fontSize: 16,
  },
});
