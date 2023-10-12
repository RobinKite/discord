import { BiHash, BiSolidHelpCircle, BiSolidBell } from "react-icons/bi";
import { BsPinAngleFill } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@/components";
import { toggleUserList } from "@/redux/slices/uiSlice";

export function Header() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.server.currentServer.title);
  const channelName = useSelector((state) => state.server.currentChannel.title);

  return (
    <header className="relative z-10 flex text-[#f2f3f5] shadow-[0_2px_4px_0_rgba(0,0,0,0.35)]">
      <div className="max-w-[240px] grow bg-[#2b2d31] px-4 py-3">
        <h2 className="font-medium">{title}</h2>
      </div>
      <div className="flex grow justify-between bg-[#313338] px-4 py-3">
        <div className="flex items-center gap-x-1">
          <BiHash
            color="#80848e"
            size={24}
          />
          <h2 className="font-medium">{channelName}</h2>
        </div>
        <div className="flex items-center gap-x-4 text-[#b5bac1]">
          <IconButton icon={<BiSolidBell size={22} />} />
          <IconButton icon={<BsPinAngleFill size={22} />} />
          <IconButton
            onClick={() => dispatch(toggleUserList())}
            icon={<FaUserGroup size={22} />}
          />
          <IconButton icon={<BiSolidHelpCircle size={24} />} />
        </div>
      </div>
    </header>
  );
}
