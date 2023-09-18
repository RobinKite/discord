// import { Layout as ServerLayout } from "@/features/server";
import AppRoutes from "./AppRoutes";
// import axios from "axios";
// import { useEffect } from "react";

export function App() {
	// useEffect(
	// 	() => async () => {
	// 		const url = "http://64.226.102.49:8080/api/v1/auth/login";

	// 		const data = {
	// 			email: "admin@admin.com",
	// 			password: "adminpassword",
	// 		};

	// 		const headers = {
	// 			Accept: "*/*",
	// 			"Content-Type": "application/json",
	// 		};

	// 		const response = await axios.post(url, data, { headers });

	// 		console.log(response.data);
	// 	},
	// 	[]
	// );

	return (
		<>
			{/* <ServerLayout /> */}
			<AppRoutes />
		</>
	);
}
