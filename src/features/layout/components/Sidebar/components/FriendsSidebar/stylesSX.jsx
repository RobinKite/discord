export const wrapperSX = {
  p: "8px",
  display: "flex",
  gap: "8px",
  alignItems: "start",
  flexGrow: 1,
};

export const titleSX = {
  fontSize: "12px",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "#949ba4",
  transition: "color 300ms linear",
  "&:hover": {
    color: "#f2f3f5",
  },
};

export const itemSX = {
  position: "relative",
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

export const innerBoxSX = {
  position: "relative",
  p: "10px",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

export const menuWrapperSX = {
  position: "absolute",
  top: "40px",
  left: "90%",
  borderRAdius: "4px",
  p: "8px",
  width: "440px",
  gap: "8px",
  bgcolor: "#2b2d31",
  boxShadow:
    "rgba(30, 31, 34, 0.6) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 2px 10px 0px",
  zIndex: 1,
};
