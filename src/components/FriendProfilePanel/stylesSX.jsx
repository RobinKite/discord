export const wrapperSX = { width: "100%", height: "120px" };

export const imageSX = {
  border: "6px #232328 solid",
  width: "90px",
  height: "90px",
  top: "70px",
  left: "15px",
};

export const statusSX = {
  top: "132px",
  left: "78px",
  width: "22px",
  height: "22px",
};

export const innerWrapperSX = {
  padding: "58px 16px 16px",
  width: "100%",
  height: "auto",
  color: "white",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

export const boxSX = (theme) => ({
  p: "12px",
  bgcolor: theme.palette.darkTooltip,
  borderRadius: "8px",
});

export const titleSX = {
  mb: "6px",
  textTransform: "uppercase",
  fontWeight: "700",
  fontSize: "12px",
};

export const buttonSX = {
  p: "4px 0",
  bgcolor: "transparent",
  display: "flex",
  justifyContent: "space-between",

  "&:hover": {
    bgcolor: "transparent",
    cursor: "pointer",
  },

  "&:focus": {
    bgcolor: "transparent",
    cursor: "pointer",
  },

  "& .MuiTouchRipple-root": {
    display: "none",
  },
};
