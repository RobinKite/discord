import { LiaPlusSolid } from "react-icons/lia";
import { SiDiscord } from "react-icons/si";
import { darkText, green } from "@/constants/designTokens";
import ButtonServer from "@/components/Buttons/ButtonServer";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@/constants";
import { openModal } from "@/redux/slices/uiSlice";
import { useNavigate } from "react-router-dom";
import {
  clearCurrentServer,
  setCurrentServer,
} from "@/redux/slices/serverSlice";

export function ClientSidebar() {
  const servers = useSelector((state) => state.server.servers);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleCreateServer = () => {
    dispatch(openModal(Modal.CREATE_SERVER));
  };

  const handleOpenPersonalMessages = () => {
    dispatch(clearCurrentServer());
    navigate("/channels/@me", { replace: true });
  };

  const handleOpenServer = (id) => {
    dispatch(setCurrentServer(id));
    navigate(`/channels/${id}`);
  };

  console.log("rerender sidebar");

  return (
    <div
      className={
        "flex h-screen min-w-[4.5rem] flex-col items-center gap-y-2 bg-[#1e1f22] py-3"
      }>
      <ButtonServer
        onClick={handleOpenPersonalMessages}
        title={"Private messages"}
        color={darkText}
        id="privateMessages">
        <SiDiscord
          size={26}
          color="white"
        />
      </ButtonServer>
      <div className={"mx-auto h-0.5 w-8  rounded-md bg-[#dbded1]"} />
      {servers.map((server) => (
        <ButtonServer
          key={server.id}
          onClick={() => handleOpenServer(server.id)}
          id={server.id}>
          {server.title}
        </ButtonServer>
      ))}

      <ButtonServer
        onClick={handleCreateServer}
        title="Add a Server"
        bgcolor={green}
        color={green}
        id="addServer">
        <LiaPlusSolid size={28} />
      </ButtonServer>
    </div>
  );
}
