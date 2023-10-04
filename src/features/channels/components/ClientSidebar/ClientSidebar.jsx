import { LiaPlusSolid } from "react-icons/lia";
import { SiDiscord } from "react-icons/si";
import { darkSidebar, darkText, green } from "@/constants/designTokens";
import { darkServerIconBg } from "@/constants/designTokens";
import ButtonServer from "@/components/Buttons/ButtonServer";
import { useSelector } from "react-redux";
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
  //TODO: Add server functionallity

  return (

    <Stack sx={StyledStackSX}>
      <ButtonServer title={"Private messages"} color={darkText}>

        <SiDiscord size={26} />
      </ButtonServer>
      <div
        className={`bg-[${darkServerIconBg}] mx-auto h-0.5  w-8 rounded-md`}
      />
      {servers.map((server) => (
        <ButtonServer key={server.id}>{server.title}</ButtonServer>
      ))}

      <ButtonServer
        title="Add a Server"
        bgcolor={green}
        color={green}>
        <LiaPlusSolid size={28} />
      </ButtonServer>
    </Stack>
  );
}
