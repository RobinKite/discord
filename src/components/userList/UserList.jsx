import { setUserStatus } from "@/redux/slices/userStatusSlice";
import Roles from "../Roles/Roles";
import User from "../User/User";
import { useDispatch } from "react-redux";

export default function UserList() {
	const users = [
		{
			userName: "Eric",
			userId: "1",
			role: "role-1",
			status: "online",
		},
		{
			userName: "Stan",
			userId: "2",
			role: "role-1",
			status: "offline",
		},
		{
			userName: "Wendy",
			userId: "3",
			role: "role-2",
			status: "sleep",
		},
		{
			userName: "Kenny",
			userId: "4",
			role: null,
			status: "invisible",
		},
	];

	const dispatch = useDispatch();
	users.forEach((user) => {
		console.log(user);
		dispatch(setUserStatus(user));
	});

	return (
		<div className="flex flex-col min-w-[240px] h-screen px-[8px] pt-6  bg-[#2b2d31]">
			<Roles />
		</div>
	);
}
