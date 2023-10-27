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
      <BiSolidVolumeFull className="mr-[0.2rem] mt-[0.1rem]" size={20} />
    );

  const ArrowIcon = collapsed ? IoIosArrowForward : IoIosArrowDown;

  return (
    <div className="mb-6 cursor-pointer pl-2 pr-4">
      <div className="mb-1 flex items-center ">
        <div
          className="flex gap-x-1 hover:brightness-150"
          onClick={() => setCollapsed((prev) => !prev)}>
          <IconButton icon={<ArrowIcon />} />
          <h3 className="font-medium uppercase">{name}</h3>
        </div>
        <IconButton className="ml-auto" icon={<BiPlus size={21} />} />
      </div>
      {!collapsed && (
        <ul className="text-[0.95rem] font-medium">
          {channels.map(({ title, isActive }) => (
            <li
              key={title}
              onMouseEnter={() => setHoveredChannelName(title)}
              onMouseLeave={() => setHoveredChannelName(null)}
              className={clsx(
                "mb-[0.125rem] flex min-h-[32px] items-center gap-x-1 rounded px-2 py-[0.35rem] transition-colors ",
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
