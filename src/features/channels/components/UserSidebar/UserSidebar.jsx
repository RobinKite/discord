import { BiSolidMicrophone } from "react-icons/bi";
import { BsHeadphones, BsGearFill } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { PanelButton, ChannelGroup } from "@/features/channels/components";
import { openModal } from "@/redux/slices/uiSlice";
import { Modal } from "@/constants";

export function UserSidebar({ fullname, username }) {
  const dispatch = useDispatch();

  const handleToggleMicrophone = () => {};
  const handleToggleDeafen = () => {};
  const handleOpenSettings = () => {
    dispatch(openModal(Modal.SETTINGS));
  };

  return (
    <aside className="flex min-w-[240px] max-w-[240px] grow flex-col justify-between bg-[#2b2d31]">
      <div className="pt-8 text-xs text-[#949BA4]">
        <ChannelGroup
          type="text"
          name="Text channels"
          channels={[{ name: "general" }, { name: "backend" }]}
        />
        <ChannelGroup
          type="voice"
          name="Voice channels"
          channels={[{ name: "general" }, { name: "frontend" }]}
        />
      </div>

      <div className="flex justify-between bg-[#232428] py-[0.35rem] pl-2 pr-3">
        <div className="flex cursor-pointer gap-x-2 rounded py-1 pl-[0.2rem] pr-2 text-[0.85rem] transition-colors hover:bg-[#3D3E44]">
          <Avatar sx={{ bgcolor: "#7076f1", width: "32px", height: "32px" }} />
          <div className="mt-[0.1rem]">
            <p className="text-[0.8rem] font-semibold leading-4 text-[#f2f3f5]">
              {fullname}
            </p>
            <p className="text-[0.75rem] leading-3 text-[#b6bac0]">
              {username}
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

UserSidebar.propTypes = {
  fullname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
