import { BsCircleFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { BsRecordCircleFill } from "react-icons/bs";

export const statusMap = {
  online: <BsCircleFill className="text-[green]" />,
  offline: <BsCircleFill className="text-stone-500" />,
  invisible: <BsRecordCircleFill className="text-stone-500" />,
  idle: <IoMdMoon className="text-yellow-500 rotate-[270deg]" />,
};
export const offlineRoles = ["offline", "invisible"];
