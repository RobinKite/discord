import { IconButton, styled } from "@mui/material";

export const StreamButtonOn = styled(IconButton)({
  backgroundColor: "#2b2d31",
  padding: "16px",
  "&:hover": {
    backgroundColor: "#1e1f22",
  },
});
export const StreamButtonOff = styled(IconButton)({
  backgroundColor: "#fff",
  padding: "16px",
  "&:hover": {
    backgroundColor: "#f0eeee",
  },
});
export const FullScreenButton = styled(IconButton)({
  position: "absolute",
  top: "8px",
  right: "8px",
});
