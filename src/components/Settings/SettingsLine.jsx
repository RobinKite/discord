import { Stack } from "@mui/system";
import PropTypes from "prop-types";

const SettingsLine = ({ styles }) => (
  <Stack
    variant="span"
    sx={{
      boxSizing: "border-box",
      display: "block",
      height: "1px",
      bgcolor: "#949ba448",
      content: "''",
      ...styles,
    }}
  />
);

SettingsLine.propTypes = {
  styles: PropTypes.object,
};

export default SettingsLine;
