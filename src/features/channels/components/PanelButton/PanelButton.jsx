import PropTypes from "prop-types";

export function PanelButton({ onClick, children }) {
  return (
    <button
      type="button"
      className="flex h-[32px] w-[32px] items-center justify-center rounded transition-colors hover:bg-[#3D3E44]"
      onClick={onClick}>
      {children}
    </button>
  );
}

PanelButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
