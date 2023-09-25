import { BiHash, BiSolidVolumeFull } from "react-icons/bi";
import PropTypes from "prop-types";

export function ChannelGroup({ type, name, channels }) {
  const Icon = type === "text" ? BiHash : BiSolidVolumeFull;

  return (
    <div className="mb-6 cursor-pointer px-2">
      <h3 className="mb-[0.35rem] indent-2 font-semibold uppercase">{name}</h3>
      <ul className="text-[0.9rem] font-medium">
        {channels.map((channel) => (
          <li
            key={channel.name}
            className="group flex items-center gap-x-1 rounded px-2 py-1 transition-colors hover:bg-[#404249]">
            <Icon size={22} />
            <span className="group-hover:text-white">{channel.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

ChannelGroup.propTypes = {
  type: PropTypes.oneOf(["voice", "text"]).isRequired,
  name: PropTypes.string.isRequired,
  channels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
