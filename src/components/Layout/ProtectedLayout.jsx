import useAuth from "@/hooks/useAuth";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
	const { setAuth } = useAuth();

	const handleLogout = () => {
		try {
			setAuth(null);
		} catch (e) {
			console.error(e);
		}
	};
	return (
		<>
			<Outlet />
			<button onClick={handleLogout}>Log out</button>
		</>
	);
};

export default ProtectedLayout;
