import { LiaPlusSolid } from "react-icons/lia";
import { SiDiscord } from "react-icons/si";
import { darkText, green } from "@/constants/designTokens";
import ButtonServer from "@/components/Buttons/ButtonServer";
import { useSelector } from "react-redux";

export function ClientSidebar() {
  const servers = useSelector((state) => state.server.servers);
  //TODO: Add server functionallity

  return (
    <div
      className={
        "flex h-screen min-w-[4.5rem] flex-col items-center gap-y-2 bg-[#1e1f22] py-3"
      }>
      <ButtonServer
        title={"Private messages"}
        color={darkText}>
        <SiDiscord
          size={26}
          color="white"
        />
      </ButtonServer>
      <div className={"mx-auto h-0.5 w-8  rounded-md bg-[#dbded1]"} />
      {servers.map((server) => (
        <ButtonServer key={server.id}>{server.title}</ButtonServer>
      ))}

      <ButtonServer
        title="Add a Server"
        bgcolor={green}
        color={green}>
        <LiaPlusSolid size={28} />
      </ButtonServer>
    </div>
  );
}
