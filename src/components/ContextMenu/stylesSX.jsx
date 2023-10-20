export const styledMenuSX = {
  visibility: "hidden",
  opacity: 0,
  backgroundColor: "#111214",
  position: "fixed",
  padding: "6px 8px",
  borderRadius: "5px",
  fontSize: "0.875rem",
  width: "100%",
  maxWidth: "240px",
  zIndex: 11,

  "&.active": {
    visibility: "visible",
    opacity: 1,
    display: "flex",
    flexDirection: "column",
  },

  "& button": {
    width: "100%",
    backgroundColor: "transparent",
    border: 0,
    borderRadius: "3px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",
    padding: "5px 8px",
    cursor: "pointer",
    color: "#b5bac1",
    transition: "background-color 250ms linear",
  },

  "& button:hover": {
    backgroundColor: "#5865f2",
    color: "#ffffff",
  },
  "& button:focus": {
    backgroundColor: "#5865f2",
    color: "#ffffff",
    outline: "none",
  },

  "& hr": {
    border: 0,
    borderBottom: "1px solid #32383f",
    backgroundColor: "transparent",
    margin: "5px 0",
  },
};

export const styledFormControlLabelSX = {
  justifyContent: "space-between",
  m: 0,
  pl: "8px",
  borderRadius: "4px",
  color: "#b5bac1",
  fontSize: "14px",
  backgroundColor: "transparent",
  transition: "background-color 250ms linear, color 250ms linear",
  "& span": { fontSize: "14px" },
  "&:hover": { backgroundColor: "#5865f2", color: "#ffffff" },
  "&:hover svg": { color: "#ffffff" },
  "&:focus": { backgroundColor: "#5865f2", color: "#ffffff" },
  "&:focus svg": { color: "#ffffff" },
};

export const styledCheckboxSX = {
  borderRadius: 0,
  color: "#b5bac1",
  transition: "background-color 250ms linear",
  "& .MuiSvgIcon-root": { fontSize: 18 },
  "&.Mui-checked": {
    color: "#5865f2",
  },
};

export const styleSelectSX = {
  position: "relative",
  transition: "opacity 250ms linear",
  "&:hover div": {
    opacity: 1,
    pointerEvents: "auto",
  },
  "&:focus div": {
    opacity: 1,
    pointerEvents: "auto",
  },
  "&:active div": {
    opacity: 1,
    pointerEvents: "auto",
  },

  "& div": {
    position: "absolute",
    top: "-4px",
    right: "105%",
    borderRadius: "6px",
    p: "6px",
    width: "100%",
    backgroundColor: "#111214",
    opacity: 0,
    pointerEvents: "none",
  },
};
