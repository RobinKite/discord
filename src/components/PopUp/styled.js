import { styled } from "@mui/system";

export const CustomNoteTextField = styled("input")({
  fontSize: "12px",
  color: "#dbdee1",
  width: "100%",
  border: "none",
  backgroundColor: "#111214",
  marginBottom: "24px",
  "&:focus": {
    outline: "none",
  },
});

export const CustomMessageTextField = styled("input")({
  fontSize: "14px",
  color: "#dbdee1",
  width: "100%",
  borderRadius: "4px",
  border: "1px solid #2c2f33",
  backgroundColor: "#111214",
  padding: "12px 0 12px 12px",
  "&:focus": {
    outline: "none",
  },
});
