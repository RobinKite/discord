import PropTypes from "prop-types";
import SettingsNavItem from "./SettingsNavItem";
import SettingsLine from "./SettingsLine";
import { List, Typography } from "@mui/material";
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
        }}
      >
        {header}
      </Typography>
    )}
    <List>
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
    <SettingsLine />
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
