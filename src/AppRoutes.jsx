import { Route, Routes } from "react-router-dom";
import PublicLayout from "./components/Layout/PublicLayout";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Default from "./pages/Default/Default";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				exact
				path="/"
				element={<PublicLayout />}>
				<Route
					path="login"
					element={<Login />}
				/>

				<Route element={<RequireAuth />}>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="channels"
						element={<p>Channel</p>}
					/>
					{/* <Route
						path="channels/:textChannelId"
						element={<p></p>}
					/> */}
				</Route>

				<Route
					path="*"
					element={<Default />}
				/>
			</Route>
		</Routes>
	);
};

export default AppRoutes;
