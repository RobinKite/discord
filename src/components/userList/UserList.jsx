import React from "react";
import User from "../User/User";

export default function UserList() {
	const allUsers = [
		{
			userName: "John",
			id: "1",
		},
		{
			userName: "Bill",
			id: "2",
		},
	];

	return (
		<ul className="flex flex-col min-w-[240px] h-screen px-[8px] py-[1px] bg-[#2b2d31]">
			{allUsers.map((user) => (
				<li key={user.id}>
					<User user={user} />
				</li>
			))}
		</ul>
	);
}
