import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/App";
import "@/index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route
							path="/*"
							element={<App />}
						/>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
