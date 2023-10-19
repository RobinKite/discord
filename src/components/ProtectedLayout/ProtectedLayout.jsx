import { Modal } from "@/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Settings from "../Settings/Settings";
import PopUp from "../PopUp/PopUp";
import CreateServerModal from "../Modals/CreateServerModal";

export function ProtectedLayout() {
  const modalStack = useSelector((state) => state.ui.modalStack);
  const isSettingsModalOpen = modalStack.includes(Modal.SETTINGS);
  const isPopUpOpen = modalStack.includes(Modal.POPUP);
  const isCreateServerModalOpen = modalStack.includes(Modal.CREATE_SERVER);

  useEffect(() => {
    if (isSettingsModalOpen)
      document.getElementById("root").classList.add("overflow-hidden");
    if (!isSettingsModalOpen)
      document.getElementById("root").classList.remove("overflow-hidden");
  }, [isSettingsModalOpen]);

  return (
    <>
      <Outlet />
      {isSettingsModalOpen && <Settings />}
      {isPopUpOpen && <PopUp />}
      {isCreateServerModalOpen && <CreateServerModal />}
    </>
  );
}
