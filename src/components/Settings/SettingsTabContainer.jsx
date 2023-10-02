import PropTypes from "prop-types";

const SettingsTabContainer = ({ header, content }) => {
  return (
    <li>
      <h2 className="mb-5 font-[600] text-[#f2f3f5]">{header}</h2>
      {content}
    </li>
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
