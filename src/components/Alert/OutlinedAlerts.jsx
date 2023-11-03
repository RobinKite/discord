import { Alert } from "@mui/material";
import PropTypes from "prop-types";

export default function OutlinedAlerts({ error }) {
  return (
    <Alert
      className="mb-6 text-center text-sm"
      sx={{ fontSize: "13px", color: "red" }}
      variant="outlined"
      severity="error"
    >
      {error}
    </Alert>
  );
}

OutlinedAlerts.propTypes = {
  error: PropTypes.string.isRequired,
};
