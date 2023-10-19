import { cloneElement } from "react";
import PropTypes from "prop-types";
import { clsx } from "clsx";

export function CategoryButton({ icon, text, isActive }) {
  const Icon = cloneElement(icon, { size: 24 });

  return (
    <button
      className={clsx(
        "mb-[0.2rem] flex w-full items-center gap-x-3 rounded px-3 py-[0.65rem]",
        isActive
          ? "cursor-default bg-[#5A64EA] text-white"
          : "bg-[#2B2D30] text-[#B6BAC0] hover:brightness-125",
      )}>
      {Icon}
      <span className="text-[0.875rem] font-medium">{text}</span>
    </button>
  );
}

CategoryButton.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

CategoryButton.defaultProps = {
  isActive: false,
};
