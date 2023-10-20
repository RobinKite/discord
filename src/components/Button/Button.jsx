import { memo } from "react";
import { Button as MuiButton } from "@mui/material";
import PropTypes from "prop-types";

export const Button = memo(({ children, ...rest }) => {
  return <MuiButton {...rest}>{children}</MuiButton>;
});

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.any.isRequired,
};
