import { SiDiscord } from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { IoMdMoon } from "react-icons/io";
import { BsRecordCircleFill } from "react-icons/bs";

const statusMap = {
  online: <BsCircleFill className="text-[green]" />,
  offline: <BsCircleFill className="text-stone-500" />,
  invisible: <BsRecordCircleFill className="text-stone-500" />,
  idle: <IoMdMoon className="text-yellow-500 rotate-[270deg]" />,
};
const offlineRoles = ["offline", "invisible"];
// import { useSelector } from "react-redux";

export default function User({ user }) {
  // const username = useSelector(state => state?.user?.userName) || "No name";
  const { userName = "No name", userAvatar = null, status, role } = user;
  const isOffline = !offlineRoles.includes(status);

  return (
    <div className="flex px-1.5 py-1 rounded items-center bg-[#2b2d31] cursor-pointer hover:bg-[#35373d] relative ">
      <div className="flex rounded-[50%] bg-[#5d64f4] w-[32px] h-[32px] mr-2 justify-center items-center ">
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
        <span className="absolute flex justify-center items-center p-[3px] w-[14px] h-[14px] rounded-[50%] bg-inherit bottom-1 left-7">
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
