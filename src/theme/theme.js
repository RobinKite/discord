import { createTheme } from "@mui/material/styles";
import extendPalette, { darkText, darkTooltip } from "./designTokens";

const defaultTheme = createTheme();
const { buttonBgHover, buttonBgDefault, buttonBgDisabled, white } =
  extendPalette;

const theme = createTheme({
  extendPalette,
  palette: {
    ...extendPalette,
  },
  spacing: 4,
  shadows: [
    "none",
    "0 1px 2px 0 rgba(0,0,0,0.35)",
    ...defaultTheme.shadows.slice(2),
  ],
  breakpoints: {
    values: { xs: 0, sm: 450, md: 700, lg: 1200, xl: 1536 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme: { spacing } }) => ({
          borderRadius: 4,
          padding: spacing(2.5, 0),
          backgroundColor: buttonBgDefault,
          color: white,
          lineHeight: "1.2rem",

          "&:hover": {
            backgroundColor: buttonBgHover,
          },

          ["&.Mui-disabled"]: {
            backgroundColor: buttonBgDisabled,
            color: white,
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          color: "#ffffffaa",
          textTransform: "uppercase",
          fontWeight: "700",
          "& .MuiFormLabel-asterisk": {
            color: "#dd3f41",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({
          theme: {
            palette: { mode },
          },
        }) => ({
          borderRadius: 4,
          backgroundColor:
            mode === "dark"
              ? extendPalette.darkTextLighter
              : extendPalette.darkSidebar,
          border: "none",
          color:
            mode === "dark" ? extendPalette.grey900 : extendPalette.darkText,
          height: "40px",
          padding: "10px",
          outline: "none",
          marginBottom: "6px",
        }),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: darkTooltip,
          fontSize: "12px",
          fontWeight: "500",
          padding: "8px 12px",
          color: darkText,
          "& .MuiTooltip-arrow": {
            color: darkTooltip,
          },
        },
      },
      defaultProps: {
        placement: "top",
      },
    },
  },
});

export { theme };
