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
      <h2 className="px-[10px] py-[6px] text-xs uppercase text-[#949ba4]">
        {header}
      </h2>
    )}
    <ul>
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
    </ul>
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
