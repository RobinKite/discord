import { Route, Routes } from "react-router-dom";
import PublicLayout from "./components/Layout/PublicLayout";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Default from "./pages/Default/Default";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { Layout as ServerLayout } from "@/features/server";
import Register from "./pages/Register/Register";

const AppRoutes = () => {
	return (
		<Routes>
			{/* <Route exact path="/" element={<PublicLayout />}>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />;

				<Route element={<RequireAuth />}> */}
			<Route path="channels/">
				<Route
					path="@me"
					element={<ServerLayout />}
				/>
				<Route
					path=":serverId/:channelId"
					element={<p>Server channel</p>}
				/>
			</Route>
			{/* <Route path="/" element={<Home />} />
				</Route>
				<Route path="*" element={<Default />} />
			</Route> */}
		</Routes>
	);
};

export default AppRoutes;
