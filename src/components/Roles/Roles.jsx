import User from "../User/User";

export default function Roles({ users }) {
	const roles = ["role-1", "role-2"];
	const usersWithoutRoleOffline = [];
	const usersWithoutRoleOnline = [];

	return (
		<div>
			{roles.map((role) => {
				const filtredUsers = users.filter((user) => {
					if (!user.role || user.status === "invisible") {
						user.status === "invisible"
							? usersWithoutRoleOffline.push(user)
							: usersWithoutRoleOnline.push(user);
					}
					return role === user.role && user.status !== "invisible";
				});

				return (
					<div key={role}>
						<h2 className="text-[#959ba3] uppercase flex">
							{role} - {filtredUsers.length}
						</h2>
						<ul className="flex flex-col ">
							{filtredUsers.map((user) => (
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
