import Roles from "../Roles/Roles";
import User from "../User/User";

export default function UserList() {
	const allUsers = [
		{
			userName: "Eric",
			id: "1",
			role: "role-1",
			status: "online",
		},
		{
			userName: "Stan",
			id: "2",
			role: "role-1",
			status: "offline",
		},
		{
			userName: "Wendy",
			id: "3",
			role: "role-2",
			status: "sleep",
		},
		{
			userName: "Kenny",
			id: "4",
			role: null,
			status: "invisible",
		},
	];

	return (
		<div className="flex flex-col min-w-[240px] h-screen px-[8px] pt-6  bg-[#2b2d31]">
			<Roles users={allUsers} />
		</div>
	);
}
