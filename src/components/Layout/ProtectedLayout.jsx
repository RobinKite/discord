import { SETTINGS_MODAL } from "@/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Settings from "../Settings/Settings";

const ProtectedLayout = () => {
  const modalStack = useSelector((state) => state.ui.modalStack);
  const isSettingsModalOpen = modalStack.includes(SETTINGS_MODAL);

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
    </>
  );
};

export default ProtectedLayout;
