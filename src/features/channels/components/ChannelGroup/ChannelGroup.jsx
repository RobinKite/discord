import { useState } from "react";
import { clsx } from "clsx";
import { BiHash, BiSolidVolumeFull, BiPlus } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BsFillPersonPlusFill, BsFillGearFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { IconButton } from "@/components";

export function ChannelGroup({ type, name, channels }) {
  const [collapsed, setCollapsed] = useState(false);
  const [hoveredChannelName, setHoveredChannelName] = useState(null);

  const GroupIcon =
    type === "text" ? (
      <BiHash className="mr-[0.1rem]" size={22} />
    ) : (
      <BiSolidVolumeFull className="mr-[0.1rem] mt-[0.1rem]" size={20} />
    );

  const ArrowIcon = collapsed ? IoIosArrowForward : IoIosArrowDown;

  return (
    <div className="mb-6 cursor-pointer pl-2 pr-4">
      <div className="mb-[0.35rem] flex items-center gap-x-1">
        <IconButton
          onClick={() => setCollapsed((prev) => !prev)}
          icon={<ArrowIcon />}
        />
        <h3 className="font-semibold uppercase">{name}</h3>
        <IconButton className="ml-auto" icon={<BiPlus size={24} />} />
      </div>
      {!collapsed && (
        <ul className="text-[0.9rem] font-medium">
          {channels.map(({ title, isActive }) => (
            <li
              key={title}
              onMouseEnter={() => setHoveredChannelName(title)}
              onMouseLeave={() => setHoveredChannelName(null)}
              className={clsx(
                "mb-1 flex min-h-[32px] items-center gap-x-1 rounded px-2 py-1 transition-colors ",
                isActive ? "bg-[#404249]" : "group hover:bg-[#35373C]",
              )}>
              {GroupIcon}
              <span
                className={clsx(
                  isActive ? "brightness-200" : "group-hover:brightness-150",
                )}>
                {title}
              </span>
              {(isActive || hoveredChannelName === title) && (
                <div className="ml-auto flex items-center gap-x-2">
                  <IconButton icon={<BsFillPersonPlusFill size={14} />} />
                  <IconButton icon={<BsFillGearFill size={12} />} />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ChannelGroup.propTypes = {
  type: PropTypes.oneOf(["voice", "text"]).isRequired,
  name: PropTypes.string.isRequired,
  channels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
