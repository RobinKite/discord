import { InputLabel, styled } from "@mui/material";

export const CustomLabel = styled(InputLabel)(() => ({
  "&": {
    fontSize: "12px",
    color: "#ffffffaa",
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: "8px",
  },
  "& .MuiFormLabel-asterisk": {
    color: "#dd3f41",
  },
}));
