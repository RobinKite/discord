export const wrapperSX = {
  p: "8px",
  display: "flex",
  gap: "8px",
  alignItems: "start",
  flexGrow: 1,
};

export const titleSX = {
  ml: "10px",
  fontSize: "12px",
  textTransform: "uppercase",
  fontWeight: "700",
  color: "#949ba4",
};

export const itemSX = {
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

  "&:hover": {
    color: "#f2f3f5",
    backgroundColor: "#4e505899",
  },
  "&:hover svg": {
    fill: "#f2f3f5",
  },

  "&:focus": {
    color: "#f2f3f5",
    backgroundColor: "#4e505899",
  },
  "&:focus svg": {
    fill: "#f2f3f5",
  },

  "&:active": {
    color: "#ffffff",
    backgroundColor: "#383a40",
  },
};
