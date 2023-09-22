import PropTypes from "prop-types";
import { BiHash, BiSolidHelpCircle } from "react-icons/bi";

export function Header({ serverName, channelName }) {
  return (
    <header className="flex relative z-10 text-[#f2f3f5] shadow-[0_2px_4px_0_rgba(0,0,0,0.35)]">
      <div className="max-w-[240px] grow px-4 py-3 bg-[#2b2d31]">
        <h2 className="font-medium">{serverName}</h2>
      </div>
      <div className="bg-[#313338] justify-between flex grow px-4 py-3">
        <div className="flex items-center gap-x-1">
          <BiHash
            color="#80848e"
            size={24}
          />
          <h2 className="font-medium">{channelName}</h2>
        </div>
        <div>
          <BiSolidHelpCircle
            color="#b5bac1"
            size={24}
          />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  serverName: PropTypes.string,
  channelName: PropTypes.string,
};
