import User from "../User/User";

export default function Roles({ users }) {
	const roles = ["role-1", "role-2"];
	const usersByRole = {};

	roles.forEach((role) => {
		usersByRole[role] = filterUsers(users, role);
		console.log(usersByRole);
	});

	return (
		<div>
			{roles.map((role) => {
				const { filteredUsers } = usersByRole[role];

				return (
					<div key={role}>
						<h2 className="text-[#959ba3] uppercase flex">
							{role} - {filteredUsers.length}
						</h2>
						<ul className="flex flex-col ">
							{filteredUsers.map((user) => (
								<li key={user.id}>
									<User user={user} />
								</li>
							))}
						</ul>
					</div>
				);
			})}
		</div>
	);
}

function filterUsers(users, role) {
	const usersWithoutRoleOffline = [];
	const usersWithoutRoleOnline = [];

	const filteredUsers = users.filter((user) => {
		if (!user.role || user.status === "invisible") {
			user.status === "invisible"
				? usersWithoutRoleOffline.push(user)
				: usersWithoutRoleOnline.push(user);
			return false;
		}
		return role === user.role && user.status !== "invisible";
	});

	return { filteredUsers, usersWithoutRoleOffline, usersWithoutRoleOnline };
}
