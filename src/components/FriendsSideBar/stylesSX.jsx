export const wrapperSX = {
  p: "8px",
  display: "flex",
  gap: "8px",
  alignItems: "start",
  flexGrow: 1,
};

export const titleSX = {
  // ml: "10px",
  // mb: "10px",
  fontSize: "12px",
  textTransform: "uppercase",
  fontWeight: "700",
  color: "#949ba4",
  "&:hover": {
    color: "#f2f3f5",
  },
};

export const itemSX = {
  position: "reletive",
  borderRadius: "4px",
  p: "8px",
  width: "100%",
  height: "42px",
  display: "flex",
  alignItems: "center",
  gap: "14px",
  fontSize: "16px",
  color: "#949ba4",
  transition:
    "fill 250ms linear, background-color 250ms linear, color 250ms linear",

  "&:hover": { color: "#f2f3f5", backgroundColor: "#35373d" },

  "&:hover svg": {
    opacity: "100%",
  },
  "&:hover>div, svg:hover": {
    color: "#f2f3f5",
    backgroundColor: "#35373d",
    cursor: "pointer",
  },

  "&:focus svg": {
    opacity: "100%",
  },
  "&:focus>div, svg:focus": {
    color: "#f2f3f5",
    backgroundColor: "#35373d",
    cursor: "pointer",
  },
};

export const closeIconSX = {
  position: "absolute",
  right: "16px",
  width: "18px",
  height: "18px",
  bgcolor: "transparent",
  opacity: 0,
  color: "#f2f3f5",
  "&:hover": {
    bgcolor: "transparent",
  },
};

export const addIconSX = {
  width: "18px",
  height: "18px",
  color: "#949ba4",
  "&:hover": {
    cursor: "pointer",
    color: "#f2f3f5",
  },
};
