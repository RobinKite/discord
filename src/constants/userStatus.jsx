import { IoMdMoon } from "react-icons/io";
import { BsCircleFill, BsRecordCircleFill } from "react-icons/bs";
import { Status } from "@/constants";

export const statusMap = {
  [Status.ONLINE]: <BsCircleFill className="text-[green]" />,
  [Status.OFFLINE]: <BsCircleFill className="text-stone-500" />,
  [Status.INVISIBLE]: <BsRecordCircleFill className="text-stone-500" />,
  [Status.IDLE]: <IoMdMoon className="rotate-[270deg] text-yellow-500" />,
};
export const offlineRoles = [Status.OFFLINE, Status.INVISIBLE];
