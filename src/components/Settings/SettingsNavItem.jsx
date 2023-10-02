import PropTypes from "prop-types";

const SettingsNavItem = ({ name, isActive, onClick }) => {
  return (
    <li>
      <button
        className={`w-full rounded-[4px] px-[10px] py-[6px] text-left text-[#B5BAC1] hover:bg-[#4e50584c] hover:text-white ${
          isActive ? "bg-[#4e505899] text-white" : ""
        }`}
        onClick={onClick}>
        {name}
      </button>
    </li>
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
