import PropTypes from "prop-types";

export function IconButton({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex items-center justify-center hover:brightness-125">
      {icon}
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  onClick: () => {},
};
