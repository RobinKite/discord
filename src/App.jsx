import AppRoutes from "./AppRoutes";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}
