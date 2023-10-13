import { BiSolidMicrophone } from "react-icons/bi";
import { BsHeadphones, BsGearFill } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import { PanelButton } from "@/features/channels/components";
import { useDispatch } from "react-redux";
import {
  fillPopupContent,
  openModal,
  setPopUpPosition,
} from "@/redux/slices/uiSlice";
import { Modal, PopUpPositions } from "@/constants";
import { useBbox } from "@/hooks/useBbox";
import { useUser } from "@/hooks/useUser";

export function UserSidebarPanel() {
  const dispatch = useDispatch();
  const user = useUser();

  const [bbox, ref] = useBbox();

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
    <div
      ref={ref}
      className="flex justify-between bg-[#232428] py-[0.35rem] pl-2 pr-3">
      <div
        onClick={handleModalOpen}
        className="flex cursor-pointer gap-x-2 rounded py-1 pl-[0.2rem] pr-2 text-[0.85rem] transition-colors hover:bg-[#3D3E44]">
        {user.avatar ? (
          <img src={user.avatar} alt="user avatar" />
        ) : (
          <Avatar sx={{ bgcolor: "#7076f1", width: "32px", height: "32px" }} />
        )}
        <div className="mt-[0.1rem]">
          <p className="text-[0.8rem] font-semibold leading-4 text-[#f2f3f5]">
            {user.name}
          </p>
          <p className="text-[0.75rem] leading-3 text-[#b6bac0]">
            {user.userName}
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
  );
}
