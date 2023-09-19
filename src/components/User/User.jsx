import React from "react";
import { SiDiscord } from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";
import { green } from "@/constants/designTokens";
// import { useSelector } from "react-redux";

export default function User(user) {
	// const username = useSelector(state => state?.user?.userName) || "No name";
	const username = user?.user?.userName || "No name";
	const userAvatar = user?.userAvatar || null;
	return (
		<div className="flex px-1.5 py-1 rounded items-center bg-[#2b2d31] hover:bg-[#35373d] relative">
			<div className="flex rounded-[50%] bg-[#5d64f4] w-[32px] h-[32px] mr-2 justify-center items-center ">
				{userAvatar ? (
					<img src="userAvatar" alt="user avatar" />
				) : (
					<SiDiscord size={20} className="text-white" />
				)}
			</div>
			<span className="absolute flex justify-center items-center p-[3px] w-[14px] h-[14px] rounded-[50%] bg-inherit bottom-1 left-7">
				<BsCircleFill className="text-[green]" />
			</span>
			<p className="text-[#9b59b6]">{username}</p>
		</div>
	);
}
