import { LiaPlusSolid } from "react-icons/lia";
import { SiDiscord } from "react-icons/si";
import { darkText, green } from "@/constants/designTokens";
import { ServerButton } from "@/components";

import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@/constants";
import { openModal, toggleUserList } from "@/redux/slices/uiSlice";
import { useNavigate } from "react-router-dom";
import {
  clearCurrentServer,
  setCurrentServer,
  setExtraServerId,
} from "@/redux/slices/serverSlice";
import { IoCompass } from "react-icons/io5";
import { Stack } from "@mui/material";

const StyledStackSX = {
  display: "flex",
  height: "100vh",
  paddingTop: "12px",
  paddingBottom: "12px",
  flexDirection: "column",
  alignItems: "center",
  rowGap: "8px",
  bgcolor: "#1E1F22",
  minWidth: "4.5rem",
};

export function ClientSidebar() {
  const servers = useSelector((state) => state.server.servers);
  const isUserListShown = useSelector((state) => state.ui.isUserListShown);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleCreateServer = () => {
    dispatch(openModal(Modal.CREATE_SERVER));
  };

  const handleOpenPersonalMessages = () => {
    if (isUserListShown) dispatch(toggleUserList());

    dispatch(clearCurrentServer());
    dispatch(setExtraServerId("direct"));
    navigate("/channels/@me", { replace: true });
  };

  const handleOpenServer = (id) => {
    dispatch(clearCurrentServer());
    dispatch(setCurrentServer(id));
    navigate(`/channels/${id}`);
  };

  const handleOpenExplore = () => {
    dispatch(clearCurrentServer());
    dispatch(setExtraServerId("explore"));
    navigate("/guild-discovery");
  };

  return (
    <Stack sx={StyledStackSX}>
      <ServerButton
        onClick={handleOpenPersonalMessages}
        title={"Private messages"}
        color={darkText}
        id="direct">
        <SiDiscord size={26} color="white" />
      </ServerButton>
      <div className={"mx-auto h-0.5 w-8  rounded-md bg-[#dbded1]"} />
      {servers.map((server) => (
        <ServerButton
          key={server.id}
          title={server.title}
          onClick={() => handleOpenServer(server.id)}
          id={server.id}
          notificationCount={server.notificationCount}
        />
      ))}

      <ServerButton
        onClick={handleCreateServer}
        title="Add a Server"
        bgcolor={green}
        color={green}
        id="addServer">
        <LiaPlusSolid size={28} />
      </ServerButton>
      <ServerButton
        onClick={handleOpenExplore}
        title="Explore Discoverable Servers"
        bgcolor={green}
        color={green}
        id="explore">
        <IoCompass size={24} />
      </ServerButton>
    </Stack>
  );
}
