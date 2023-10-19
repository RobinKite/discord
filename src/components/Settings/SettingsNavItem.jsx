import { Button, ListItem } from "@mui/material";
import PropTypes from "prop-types";

const SettingsNavItem = ({ name, isActive, onClick }) => {
  return (
    <ListItem sx={{ p: 0, mb: "2px" }}>
      <Button
        className={`${
          isActive
            ? "MuiButton-containedPrimary"
            : "MuiButton-text MuiButton-textPrimary"
        }`}
        sx={{
          borderRadius: "4px",
          fontSize: "16px",
          padding: "4px 10px",
          width: "100%",
          justifyContent: "flex-start",
          textTransform: "capitalize",
          color: isActive ? "white" : "#B5BAC1",
          backgroundColor: isActive ? "#4e505899" : "transparent",
          "&:hover": {
            backgroundColor: isActive ? "#4e505899" : "#4e50584c",
            color: isActive ? "white" : "#B5BAC1",
          },
        }}
        onClick={onClick}
      >
        {name}
      </Button>
    </ListItem>
  );
};

SettingsNavItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

SettingsNavItem.defaultProps = {
  isActive: false,
  onClick: null,
};

export default SettingsNavItem;
