import PropTypes from "prop-types";
import { Panel } from "../../components";

export function BaseSidebar({ children }) {
  return (
    <aside className="flex min-w-[240px] max-w-[240px] grow flex-col bg-[#2b2d31]">
      {children}
      <Panel />
    </aside>
  );
}

BaseSidebar.propTypes = {
  children: PropTypes.node,
};
