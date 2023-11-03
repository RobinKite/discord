import { List, Typography } from "@mui/material";
import PropTypes from "prop-types";
import SettingsNavItem from "./SettingsNavItem";
import SettingsLine from "./SettingsLine";

const SettingsNavSection = ({
  header,
  items,
  activeTab,
  setActiveTab,
  setActiveTabContent,
}) => (
  <>
    {header && (
      <Typography
        variant="h2"
        sx={{
          paddingX: "10px",
          paddingY: "6px",
          fontSize: "12px",
          textTransform: "uppercase",
          color: "#949ba4",
          fontWeight: 700,
        }}>
        {header}
      </Typography>
    )}
    <List sx={{ p: 0 }}>
      {items.map(({ name, content }) => (
        <SettingsNavItem
          key={name}
          name={name}
          isActive={activeTab === name}
          onClick={() => {
            setActiveTab(name);
            setActiveTabContent(content);
          }}
        />
      ))}
    </List>
    <SettingsLine styles={{ margin: "8px 10px" }} />
  </>
);

SettingsNavSection.propTypes = {
  header: PropTypes.string,
  items: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  setActiveTabContent: PropTypes.func.isRequired,
};

SettingsNavSection.defaultProps = {
  header: "",
};

export default SettingsNavSection;
