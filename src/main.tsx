import { CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./utils/theme.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>
);
