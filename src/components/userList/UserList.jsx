import { setUserStatus } from "@/redux/slices/userStatusSlice";
import Roles from "../Roles/Roles";
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
			status: "idle",
		},
		{
			userName: "Kenny",
			userId: "4",
			role: null,
			status: "invisible",
		},
		{
			userName: "Kyle",
			userId: "5",
			role: null,
			status: "offline",
		},
		{
			userName: "Chef",
			userId: "6",
			role: null,
			status: "online",
		},
	];

	const dispatch = useDispatch();

	dispatch(setUserStatus(users));

	return (
		<div className="flex flex-col min-w-[240px] h-screen px-[8px] pt-6  bg-[#2b2d31]">
			<Roles />
		</div>
	);
}
