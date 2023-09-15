import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
	const [users, setUsers] = useState();

	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();

		const getUsers = async () => {
			try {
				const response = await axios.get("../data/users.json", {
					signal: controller.signal,
				});
				console.log(response.data);

				isMounted && setUsers(response.data);
			} catch (e) {
				console.error(e);
			}
		};

		getUsers();

		return () => {
			isMounted = false;
			controller.abort();
		};
	}, []);

	return (
		<article>
			<h2>Users List</h2>
			{users?.length ? (
				<ul>
					{users.map((user, i) => (
						<li key={i}>{user?.username}</li>
					))}
				</ul>
			) : (
				<li>No users to display</li>
			)}
		</article>
	);
};

export default Users;
