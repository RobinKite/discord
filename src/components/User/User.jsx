import { SiDiscord } from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";

export default function User({ user }) {
  // const username = useSelector(state => state?.user?.userName) || "No name";
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
      <span className="absolute bottom-1 left-7 flex h-[14px] w-[14px] items-center justify-center rounded-[50%] bg-inherit p-[3px]">
        <BsCircleFill className="text-[green]" />
      </span>
      <p className="text-[#9b59b6]">{username}</p>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};
