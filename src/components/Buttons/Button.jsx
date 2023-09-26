import { memo } from "react";
import { Button as MuiButton } from "@mui/material";

export const Button = memo(({ children, ...rest }) => {
  return <MuiButton {...rest}>{children}</MuiButton>;
});
