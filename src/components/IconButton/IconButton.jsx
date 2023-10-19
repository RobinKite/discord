import { clsx } from "clsx";
import PropTypes from "prop-types";

export function IconButton({ icon, className, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(
        "flex items-center justify-center hover:brightness-125",
        className,
      )}>
      {icon}
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

IconButton.defaultProps = {
  onClick: () => {},
  className: "",
};
