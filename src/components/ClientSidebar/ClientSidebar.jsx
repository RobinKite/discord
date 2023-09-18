import { LiaPlusSolid } from "react-icons/lia";
import ButtonServer from "../Buttons/ButtonServer";
import { SiDiscord } from "react-icons/si";
import {
  darkServerIconBg,
  darkSidebar,
  darkText,
  green,
} from "@/constants/designTokens";

const ClientSidebar = () => {
  return (
    <div
      className={`h-screen py-3 flex flex-col gap-y-2 items-center bg-[${darkSidebar}] min-w-[4.5rem]`}
    >
      <ButtonServer title="Private messages" color={darkText}>
        <SiDiscord size={26} />
      </ButtonServer>
      <div className={`w-8 h-0.5 bg-[#2c2f33] mx-auto rounded-md`} />
      <ButtonServer>S</ButtonServer>
      <ButtonServer>Se</ButtonServer>
      <ButtonServer>Ser</ButtonServer>
      <ButtonServer>Serv</ButtonServer>
      <ButtonServer>Serve</ButtonServer>
      <ButtonServer>Server</ButtonServer>
      <ButtonServer>Serverb</ButtonServer>
      <ButtonServer>Serverbac</ButtonServer>
      <ButtonServer>ServerbacServerbacServerbac</ButtonServer>
      <ButtonServer title="Add a Server" bgcolor={green} color={green}>
        <LiaPlusSolid size={28} />
      </ButtonServer>
    </div>
  );
};

export default ClientSidebar;
