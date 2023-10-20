import { BiSolidMicrophone } from "react-icons/bi";
import { BsHeadphones, BsGearFill } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { PanelButton, ChannelGroup } from "@/features/channels/components";
import {
  fillPopupContent,
  openModal,
  setPopUpPosition,
} from "@/redux/slices/uiSlice";
import { Modal, PopUpPositions } from "@/constants";
import { filterChannelsByType } from "@/utils";
import { useBbox } from "@/hooks/useBbox";

export function UserSidebar() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.userName);
  const name = useSelector((state) => state.auth.name);
  const avatar = useSelector((state) => state.auth.avatar);
  const roles = useSelector((state) => state.auth.roles);
  const status = useSelector((state) => state.auth.status);
  const serverName = useSelector((state) => state.server.currentServer.title);
  const userRegistrationDate = useSelector(
    (state) => state.auth.userRegistrationDate
  );
  const serverRegistrationDate = useSelector(
    (state) => state.auth.serverRegistrationDate
  );
  const bannerColor = useSelector((state) => state.auth.bannerColor);
  const userId = useSelector((state) => state.auth.id);
  const [bbox, ref] = useBbox();

  const user = {
    userName,
    name,
    avatar,
    roles,
    status,
    serverName,
    userRegistrationDate,
    serverRegistrationDate,
    bannerColor,
    userId,
  };

  const channels = useSelector((state) => state.server.currentServer.channels);
  const textChannels = filterChannelsByType(channels, "text");
  const voiceChannels = filterChannelsByType(channels, "voice");

  const handleToggleMicrophone = () => {};
  const handleToggleDeafen = () => {};
  const handleOpenSettings = () => {
    dispatch(openModal(Modal.SETTINGS));
  };
  const handleModalOpen = () => {
    dispatch(openModal(Modal.POPUP));
    dispatch(setPopUpPosition([PopUpPositions.SIDEBAR, bbox]));
    dispatch(fillPopupContent(user));
  };

  return (
    <aside className="flex min-w-[240px] max-w-[240px] grow flex-col justify-between bg-[#2b2d31]">
      <div className="pt-6 text-xs text-[#949BA4]">
        <ChannelGroup
          type="text"
          name="Text channels"
          channels={textChannels}
        />
        <ChannelGroup
          type="voice"
          name="Voice channels"
          channels={voiceChannels}
        />
      </div>

      <div
        ref={ref}
        onClick={handleModalOpen}
        className="flex justify-between bg-[#232428] py-[0.35rem] pl-2 pr-3">
        <div className="flex cursor-pointer gap-x-2 rounded py-1 pl-[0.2rem] pr-2 text-[0.85rem] transition-colors hover:bg-[#3D3E44]">
          {avatar ? (
            <img src={avatar} alt="user avatar" />
          ) : (
            <Avatar
              sx={{ bgcolor: "#7076f1", width: "32px", height: "32px" }}
            />
          )}
          <div className="mt-[0.1rem]">
            <p className="text-[0.8rem] font-semibold leading-4 text-[#f2f3f5]">
              {name}
            </p>
            <p className="text-[0.75rem] leading-3 text-[#b6bac0]">
              {userName}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[0.1rem]">
          <PanelButton onClick={handleToggleMicrophone}>
            <BiSolidMicrophone color="#b6bac0" size={20} />
          </PanelButton>
          <PanelButton onClick={handleToggleDeafen}>
            <BsHeadphones color="#b6bac0" size={22} />
          </PanelButton>
          <PanelButton onClick={handleOpenSettings}>
            <BsGearFill color="#b6bac0" size={18} />
          </PanelButton>
        </div>
      </div>
    </aside>
  );
}
