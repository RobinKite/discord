import ButtonPlus from "../Buttons/ButtonPlus";
import ButtonServer from "../Buttons/ButtonServer";
import { SiDiscord } from "react-icons/si";

const ClientSidebar = () => {
  return (
    <div className="h-screen py-3 w-20 flex flex-col gap-y-2 items-center bg-[#1E1F22] inset-y-0">
      <ButtonServer title={"Private messages"}>
        <SiDiscord color={"#edeaea"} size={34} />
      </ButtonServer>
      <div className="w-10 h-0.5 bg-[#2c2f33] mx-auto rounded-md"></div>
      <ButtonServer>server 1</ButtonServer>
      <ButtonServer>server 2</ButtonServer>
      <ButtonServer>server 3</ButtonServer>
      <ButtonPlus />
    </div>
  );
};

export default ClientSidebar;
