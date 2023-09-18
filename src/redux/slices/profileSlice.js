import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
	name: "profile",
	initialState: {
		userProfile: null,
	},
	reducers: {
		setProfile: (state, action) => {
			state.userProfile = action.payload;
		},
		updateProfileField: (state, action) => {
			const { field, value } = action.payload;
			state.userProfile[field] = value;
		},
	},
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
