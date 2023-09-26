import { SiDiscord } from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";

export default function User({ user }) {
  const username = user?.userName || "No name";
  const userAvatar = user?.userAvatar;

  return (
    <div className="relative flex cursor-pointer items-center rounded bg-[#2b2d31] px-1.5 py-1 hover:bg-[#35373d]">
      <div className="mr-2 flex h-[32px] w-[32px] items-center justify-center rounded-[50%] bg-[#5d64f4] ">
        {userAvatar ? (
          <img src={userAvatar} alt="user avatar" />
        ) : (
          <SiDiscord size={20} className="text-white" />
        )}
      </div>
      {user?.status !== "offline" && user?.status !== "invisible" && (
        <span className="absolute flex justify-center items-center p-[3px] w-[14px] h-[14px] rounded-[50%] bg-inherit bottom-1 left-7">
          <BsCircleFill className="text-[green]" />
        </span>
      )}
      <p className="text-[#9b59b6]">{username}</p>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};
