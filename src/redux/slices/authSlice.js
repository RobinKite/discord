import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		token: null,
		isLoggedIn: false,
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.isLoggedIn = true;
		},
		logoutUser: (state) => {
			state.user = null;
			state.token = null;
			state.isLoggedIn = false;
		},
	},
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
