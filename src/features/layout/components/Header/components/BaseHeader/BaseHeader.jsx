import PropTypes from "prop-types";

export function BaseHeader({ sidebarContent, headingContent, buttonsContent }) {
  return (
    <header className="min-h-12 relative z-10 flex max-h-12 text-[#f2f3f5] shadow-[0_2px_4px_0_rgba(0,0,0,0.35)]">
      <div className="min-w-[240px] max-w-[240px] grow bg-[#2b2d31] px-[0.65rem] py-3">
        {sidebarContent}
      </div>
      <div className="flex grow justify-between bg-[#313338] px-4 py-3">
        <div className="flex items-center gap-x-1">{headingContent}</div>
        <div className="flex items-center gap-x-4 text-[#b5bac1]">
          {buttonsContent}
        </div>
      </div>
    </header>
  );
}

BaseHeader.propTypes = {
  sidebarContent: PropTypes.node.isRequired,
  headingContent: PropTypes.node.isRequired,
  buttonsContent: PropTypes.node.isRequired,
};
