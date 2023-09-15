import { createSlice } from "@reduxjs/toolkit";

const friendsSlice = createSlice({
	name: "friends",
	initialState: {
		friendsList: [],
	},
	reducers: {
		addFriend: (state, action) => {
			state.friendsList.push(action.payload);
		},
		removeFriend: (state, action) => {
			state.friendsList = state.friendsList.filter(
				(friend) => friend.id !== action.payload
			);
		},
	},
});

export const { addFriend, removeFriend } = friendsSlice.actions;
export default friendsSlice.reducer;
