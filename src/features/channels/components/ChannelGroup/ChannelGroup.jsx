import { clsx } from "clsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiHash, BiSolidVolumeFull, BiPlus } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BsFillPersonPlusFill, BsFillGearFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { ChannelType } from "@/constants";
import { IconButton } from "@/components";
import { setCurrentChannel } from "@/redux/slices/serverSlice";

export function ChannelGroup({ type, name, channels }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentServerId = useSelector((state) => state.server.serverId);
  const currentChannel = useSelector((state) => state.server.currentChannel);
  const [collapsed, setCollapsed] = useState(false);
  const [hoveredChannelName, setHoveredChannelName] = useState(null);

  const GroupIcon = type === ChannelType.TEXT ? BiHash : BiSolidVolumeFull;
  const ArrowIcon = collapsed ? IoIosArrowForward : IoIosArrowDown;

  const switchChannel = (channel) => {
    dispatch(setCurrentChannel(channel));
    navigate(`/channels/${currentServerId}/${channel.id}`);
  };

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
      <ul className="text-[0.95rem] font-medium">
        {channels.map(
          (channel) =>
            (!collapsed || channel.id === currentChannel.id) && (
              <li
                key={channel.title}
                onMouseEnter={() => setHoveredChannelName(channel.title)}
                onMouseLeave={() => setHoveredChannelName(null)}
                onClick={() => switchChannel(channel)}
                className={clsx(
                  "mb-[0.125rem] flex min-h-[32px] items-center gap-x-1 rounded px-2 py-[0.35rem] transition-colors",
                  channel.id === currentChannel.id
                    ? "bg-[#404249]"
                    : "group hover:bg-[#35373C]",
                )}>
                <GroupIcon
                  className={clsx(
                    type === ChannelType.TEXT
                      ? "mr-[0.1rem]"
                      : "mr-[0.2rem] mt-[0.1rem]",
                  )}
                  size={type === ChannelType.TEXT ? 22 : 20}
                />
                <span
                  className={clsx(
                    channel.id === currentChannel.id
                      ? "brightness-200"
                      : "group-hover:brightness-150",
                  )}>
                  {channel.title}
                </span>
                {(channel.id === currentChannel.id ||
                  hoveredChannelName === channel.title) && (
                  <div className="ml-auto flex items-center gap-x-2">
                    <IconButton icon={<BsFillPersonPlusFill size={14} />} />
                    <IconButton icon={<BsFillGearFill size={12} />} />
                  </div>
                )}
              </li>
            ),
        )}
      </ul>
    </div>
  );
}

ChannelGroup.propTypes = {
  type: PropTypes.oneOf([ChannelType.VOICE, ChannelType.TEXT]).isRequired,
  name: PropTypes.string.isRequired,
  channels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
