import { List, Typography } from "@mui/material";
import PropTypes from "prop-types";

const SettingsTabContainer = ({ header, content }) => {
  return (
    <List>
      <Typography
        variant="h2"
        sx={{ mb: "20px", fontWeight: 600, color: "#f2f3f5", fontSize: "16px" }}
      >
        {header}
      </Typography>
      {content}
    </List>
  );
};

SettingsTabContainer.propTypes = {
  header: PropTypes.string,
  content: PropTypes.node,
};

SettingsTabContainer.defaultProps = {
  header: "",
};

export default SettingsTabContainer;
