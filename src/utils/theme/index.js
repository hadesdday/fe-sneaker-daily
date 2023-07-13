import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: {
      main: "#ff5f17",
    },
    secondary: {
      main: "#303030",
      light: "#f5f5f5",
      100: "#4c4c4c",
      200: "#c5c9c5",
      300: "#cccccc",
      400: "#808080",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Nunito Sans, sans-serif",
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: "680px",
          "@media (min-width:600px)": {
            maxWidth: "680px",
          },
        },
        maxWidthMd: {
          maxWidth: "860px",
          "@media (min-width:900px)": {
            maxWidth: "860px",
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "black",
          transition: "all 0.2s ease",
          textDecoration: "none",
          "&:hover, &.active": {
            color: "#ff5f17",
          },
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "body2", about: "firstHeaderLink" },
          style: {
            color: "white",
            transition: "all 0.2s ease",
            "&:hover": {
              color: "#f15e2c",
            },
          },
        },
        {
          props: { about: "secondHeaderLink" },
          style: {
            color: "black",
            transition: "all 0.2s ease",
            "&:hover": {
              color: "#f15e2c",
            },
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
