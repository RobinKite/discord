import { Stack } from "@mui/system";

const SettingsLine = ({ styles }) => (
  <Stack
    variant="span"
    sx={{
      marginY: "20px",
      boxSizing: "border-box",
      display: "block",
      height: "1px",
      bgcolor: "#949ba448",
      content: "''",
      ...styles,
    }}
  />
);

export default SettingsLine;
