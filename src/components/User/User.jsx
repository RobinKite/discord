import { SiDiscord } from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { IoMdMoon } from "react-icons/io";
import { BsRecordCircleFill } from "react-icons/bs";
import { Status } from "@/constants";

const statusMap = {
  [Status.ONLINE]: <BsCircleFill className="text-[green]" />,
  [Status.OFFLINE]: <BsCircleFill className="text-stone-500" />,
  [Status.INVISIBLE]: <BsRecordCircleFill className="text-stone-500" />,
  [Status.IDLE]: <IoMdMoon className="rotate-[270deg] text-yellow-500" />,
};
const offlineRoles = [Status.OFFLINE, Status.INVISIBLE];

export default function User({ user }) {
  // const username = useSelector(state => state?.user?.userName) || "No name";
  const { userName = "No name", userAvatar = null, status } = user;
  const isOffline = !offlineRoles.includes(status);

  return (
    <div className="relative flex cursor-pointer items-center rounded bg-[#2b2d31] px-1.5 py-1 hover:bg-[#35373d]">
      <div className="mr-2 flex h-[32px] w-[32px] items-center justify-center rounded-[50%] bg-[#5d64f4]">
        {userAvatar ? (
          <img
            src={userAvatar}
            alt="user avatar"
          />
        ) : (
          <SiDiscord
            size={20}
            className="text-white"
          />
        )}
      </div>
      {isOffline && (
        <span className="absolute bottom-1 left-7 flex h-[14px] w-[14px] items-center justify-center rounded-[50%] bg-inherit p-[3px]">
          {statusMap[status]}
        </span>
      )}

      <p className="text-[#9b59b6]">{userName}</p>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};
