import { Modal } from "@/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Settings from "../Settings/Settings";
import PopUp from "../PopUp/PopUp";
import { Profile } from "../Profile/Profile";

const ProtectedLayout = () => {
  const modalStack = useSelector((state) => state.ui.modalStack);
  const isSettingsModalOpen = modalStack.includes(Modal.SETTINGS);
  const isPopUpOpen = modalStack.includes(Modal.POPUP);
  const isProfileModalOpen = modalStack.includes(Modal.PROFILE);

  useEffect(() => {
    if (isSettingsModalOpen)
      document.getElementById("root").classList.add("overflow-hidden");
    if (!isSettingsModalOpen)
      document.getElementById("root").classList.remove("overflow-hidden");
  }, [isSettingsModalOpen]);

  useEffect(() => {
    if (isProfileModalOpen)
      document.getElementById("root").classList.add("overflow-hidden");
    if (!isProfileModalOpen)
      document.getElementById("root").classList.remove("overflow-hidden");
  }, [isProfileModalOpen]);

  return (
    <>
      <Outlet />
      {isSettingsModalOpen && <Settings />}
      {isPopUpOpen && <PopUp />}
      {isProfileModalOpen && <Profile />}
    </>
  );
};

export default ProtectedLayout;
