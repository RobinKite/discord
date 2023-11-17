import { Modal } from "@/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Profile } from "@/features/Profile/Profile";
import { addNotification } from "@/redux/slices/notificationsSlice";
import { updateNotificationCount } from "@/redux/slices/serverSlice";
import { useDispatch } from "react-redux";
import { CreateServerModal, PopUp, Settings } from "..";

export function ProtectedLayout() {
  const modalStack = useSelector((state) => state.ui.modalStack);
  const isSettingsModalOpen = modalStack.includes(Modal.SETTINGS);
  const isPopUpOpen = modalStack.includes(Modal.POPUP);
  const isCreateServerModalOpen = modalStack.includes(Modal.CREATE_SERVER);
  const isProfileModalOpen = modalStack.includes(Modal.PROFILE);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addNotification({ id: "0", message: "test", type: "", serverId: "1" })
    );
    dispatch(updateNotificationCount("1"));
  }, [dispatch]);

  useEffect(() => {
    if ((isSettingsModalOpen, isCreateServerModalOpen, isProfileModalOpen))
      document.getElementById("root").classList.add("overflow-hidden");
    if ((!isSettingsModalOpen, !isCreateServerModalOpen, !isProfileModalOpen))
      document.getElementById("root").classList.remove("overflow-hidden");
  }, [isSettingsModalOpen, isCreateServerModalOpen, isProfileModalOpen]);

  return (
    <>
      <Outlet />
      {isSettingsModalOpen && <Settings />}
      {isPopUpOpen && <PopUp />}
      {isCreateServerModalOpen && <CreateServerModal />}
      {isProfileModalOpen && <Profile />}
    </>
  );
}
