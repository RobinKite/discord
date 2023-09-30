import { LiaPlusSolid } from "react-icons/lia";
import { SiDiscord } from "react-icons/si";
import { darkSidebar, darkText, green } from "@/constants/designTokens";
import { darkServerIconBg } from "@/constants/designTokens";
import ButtonServer from "@/components/Buttons/ButtonServer";
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
  return (
    <Stack sx={StyledStackSX}>
      <ButtonServer title={"Private messages"} color={darkText}>
        <SiDiscord size={26} />
      </ButtonServer>
      <div
        className={`bg-[${darkServerIconBg}] mx-auto h-0.5  w-8 rounded-md`}
      />
      <ButtonServer>server 1</ButtonServer>
      <ButtonServer>server 2</ButtonServer>
      <ButtonServer>server 3</ButtonServer>
      <ButtonServer title="Add a Server" bgcolor={green} color={green}>
        <LiaPlusSolid size={28} />
      </ButtonServer>
    </Stack>
  );
}
