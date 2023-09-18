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
			<button
				onClick={handleLogout}
				className="absolute bottom-3 left-2 text-[red]">
				Log out
			</button>
		</>
	);
};

export default ProtectedLayout;
