import { IconButton, styled } from "@mui/material";

export const StreamButtonOn = styled(IconButton)({
  backgroundColor: "#2b2d31",
  padding: "1rem",
  "&:hover": {
    backgroundColor: "#1e1f22",
  },
});

export const StreamButtonOff = styled(IconButton)({
  backgroundColor: "#fff",
  padding: "1rem",
  "&:hover": {
    backgroundColor: "#f0eeee",
  },
});

export const FullScreenButton = styled(IconButton)({
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
});
