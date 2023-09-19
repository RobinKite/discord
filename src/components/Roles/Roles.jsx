import { useSelector } from "react-redux";
import User from "../User/User";

export default function Roles() {
	const users = useSelector((state) => state.userStatus.users);

	const roles = users
		.reduce(
			(result, user) => {
				const { userName, userId, role, status } = user;

				if (status === "offline" || status === "invisible") {
					const statusGroup = result.find((group) => group.name === "offline");
					statusGroup.users.push({ userName, userId, role, status });
					return result;
				}
				if (!role) {
					const statusGroup = result.find((group) => group.name === "online");
					statusGroup.users.push({ userName, userId, role, status });
					return result;
				}

				// Find or create the group based on role
				let roleGroup = result.find((group) => group.name === role);

				if (!roleGroup) {
					result.push({ name: role, users: [] });
					roleGroup = result.find((group) => group.name === role);
				}

				// Push the user to the appropriate group(s)
				if (roleGroup) {
					roleGroup.users.push({ userName, userId, role, status });
				}

				return result;
			},
			[
				{ name: "offline", users: [] },
				{ name: "online", users: [] },
			]
		)
		.reverse();

	return roles.map((role) => (
		<div key={role.name}>
			{role.users.length > 0 && (
				<>
					<h2 className="text-[#959ba3] uppercase flex">
						{role.name} - {role.users.length}
					</h2>
					<ul className="flex flex-col">
						{role.users.map((user) => (
							<li key={user.userId}>
								<User user={user} />
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	));
}
