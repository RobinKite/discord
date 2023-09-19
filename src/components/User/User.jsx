import { SiDiscord } from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { BiSolidMinusCircle } from "react-icons/bi";
import { BsRecordCircleFill } from "react-icons/bs";

export default function User({ user }) {
	const { userName = "No name", userAvatar = null, status, role } = user;
	return (
		<div className="flex px-1.5 py-1 rounded items-center bg-[#2b2d31] cursor-pointer hover:bg-[#35373d] relative ">
			<div className="flex rounded-[50%] bg-[#5d64f4] w-[32px] h-[32px] mr-2 justify-center items-center ">
				{userAvatar ? (
					<img src={userAvatar} alt="user avatar" />
				) : (
					<SiDiscord size={20} className="text-white" />
				)}
			</div>
			<span className="absolute flex justify-center items-center p-[3px] w-[14px] h-[14px] rounded-[50%] bg-inherit bottom-1 left-7">
				{status === "online" && <BsCircleFill className="text-[green]" />}
				{status === "sleep" && (
					<IoMdMoon className="text-yellow-500 rotate-[270deg]" />
				)}
				{status === "offline" && (
					<BiSolidMinusCircle className="text-red-500" />
				)}
				{status === "invisible" && (
					<BsRecordCircleFill className="text-stone-500" />
				)}
			</span>

			<p className="text-[#9b59b6]">{userName}</p>
		</div>
	);
}
