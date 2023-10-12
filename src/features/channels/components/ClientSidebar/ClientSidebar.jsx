import { LiaPlusSolid } from "react-icons/lia";
import { SiDiscord } from "react-icons/si";
import { darkText, green } from "@/constants/designTokens";
import ButtonServer from "@/components/Buttons/ButtonServer";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@/constants";
import { openModal } from "@/redux/slices/uiSlice";

export function ClientSidebar() {
  const servers = useSelector((state) => state.server.servers);
  //TODO: Add server functionallity
  //TODO: Stop page from reloading upon manual adress input ?

  const dispatch = useDispatch();
  const serverId = useSelector((state) => state.server.serverId);

  const handleCreateServer = () => {
    dispatch(openModal(Modal.CREATE_SERVER));
  };

  return (
    <div
      className={
        "flex h-screen min-w-[4.5rem] flex-col items-center gap-y-2 bg-[#1e1f22] py-3"
      }>
      <ButtonServer
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
          id={server.id}
          activeServerId={serverId}>
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
