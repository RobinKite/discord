import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import profileReducer from "./slices/profileSlice";
import serverReducer from "./slices/serverSlice";
import notificationsReducer from "./slices/notificationsSlice";
import friendsReducer from "./slices/friendsSlice";
import settingsReducer from "./slices/settingsSlice";
import uiReducer from "./slices/uiSlice";
import websocketReducer from "./slices/websocketSlice";
import errorReducer from "./slices/errorSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		profile: profileReducer,
		server: serverReducer,
		notifications: notificationsReducer,
		friends: friendsReducer,
		settings: settingsReducer,
		ui: uiReducer,
		websocket: websocketReducer,
		error: errorReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
