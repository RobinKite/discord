export const add_friends_header = {
  display: "flex",
  padding: "20px 30px",
  width: "100%",
  flexShrink: 0,
  borderBottom: "1px solid #4e50587a",
};

export const add_friends_title = {
  mb: "8px",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "1.25",
  textTransform: "uppercase",
  color: "#ffffff",
};

export const add_friends_button = {
  width: {
    xs: "200px",
    md: "378px",
  },
  minHeight: "55px",
  border: "1px solid rgba(78, 80, 88, 0.48)",
  borderRadius: "8px",
  p: "1px 16px",
  justifyContent: "space-between",

  textTransform: "capitalize",
  backgroundColor: "rgb(43, 45, 49)",
  transition: "background-color 250ms linear",

  "&:hover": {
    backgroundColor: "rgba(78, 80, 88, 0.3)",
  },
};

export const add_friends_icon_button = {
  mr: "8px",
  borderRadius: "8px",
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "#23A559",
};

export const add_friends_secondary_text = {
  mt: "48px",
  fontSize: "14px",
  lineHeight: "1.29",
  fontWeight: "400",
  color: "#B5BAC1",
};

export const add_friend_input = {
  m: "0",
  borderRadius: "8px",
  p: "0",
  minHeight: "100%",
  width: "100%",
  fontSize: "16px",
  fontWeight: 400,
  letterSpacing: " 0.04em",
  lineHeight: "20px",

  "& .MuiInputBase-input": {
    borderRadius: "8px",
    p: "10px 27% 10px 10px",
    width: "100%",
    "&:focus": { outline: "1px solid #00a8fc" },
  },
};

export const input_wrapper = {
  minHeight: "48px",
  alignItems: "center",
  borderRadius: "8px",
  display: "flex",
  marginTop: "16px",
  padding: "0",
  position: "relative",
};

export const input_button = {
  position: "absolute",
  top: "50%",
  right: "16px",
  transform: "translate(0, -50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  m: "0",
  p: "2px 16px",
  width: "24%",
  minHeight: "28px",
  textTransform: "capitalize",

  "&:hover": {
    backgroundColor: "#5865f2",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },
};

export const friend_sidebar = {
  display: {
    xs: "none",
    md: "flex",
  },
  borderLeft: "1px solid #4e50587a",
  flex: "0 1 30%",
  minWidth: "360px",
  maxWidth: "420px",
  height: "100%",
};

export const sidebar_title = {
  m: "8px 0 16px",
  fontWeight: "800",
  fontSize: "20px",
  lineHeight: "1.20",
  textTransform: "capitalize",
  color: "#ffffff",
};

export const sidebar_inner = {
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: "8px",
  padding: "16px",
};

export const sidebar_text = {
  fontSize: "14px",
  lineHeight: "1.29",
  fontWeight: "400",
  color: "#B5BAC1",
};

export const sidebar_secondary_title = {
  mb: "4px",
  fontSize: "16px",
  lineHeight: "1.25",
  fontWeight: "600",
  color: "rgb(242, 243, 245)",
};
