import { LiaPlusSolid } from "react-icons/lia";
import { SiDiscord } from "react-icons/si";
import { darkSidebar, darkText, green } from "@/constants/designTokens";
import { darkServerIconBg } from "@/constants/designTokens";
import ButtonServer from "@/components/Buttons/ButtonServer";

export function ClientSidebar() {
  return (
    <div
      className={`bg-[${darkSidebar}] flex h-screen min-w-[4.5rem] flex-col items-center gap-y-2 py-3`}
    >
      <ButtonServer title={"Private messages"} color={darkText}>
        <SiDiscord size={26} color="white" />
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
    </div>
  );
}
