import { useDispatch, useSelector } from "react-redux";
import { BiHash, BiSolidHelpCircle, BiSolidBell } from "react-icons/bi";
import { BsPinAngleFill } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { IconButton } from "@/components";
import { toggleUserList } from "@/redux/slices/uiSlice";
import { BaseHeader } from "../../components";

export function ServerHeader() {
  const dispatch = useDispatch();
  const channelTitle = useSelector(
    (state) => state.server.currentChannel.title,
  );
  const serverTitle = useSelector((state) => state.server.currentServer.title);

  return (
    <BaseHeader
      sidebarContent={
        <h2 className="truncate px-[0.35rem] font-medium">{serverTitle}</h2>
      }
      headingContent={
        <>
          <BiHash color="#80848e" size={24} />
          <h2 className="font-medium">{channelTitle}</h2>
        </>
      }
      buttonsContent={
        <>
          <IconButton icon={<BiSolidBell size={22} />} />
          <IconButton icon={<BsPinAngleFill size={22} />} />
          <IconButton
            onClick={() => dispatch(toggleUserList())}
            icon={<FaUserGroup size={22} />}
          />
          <IconButton icon={<BiSolidHelpCircle size={24} />} />
        </>
      }
    />
  );
}
