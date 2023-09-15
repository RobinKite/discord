import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
	name: "error",
	initialState: {
		errorMessages: [],
	},
	reducers: {
		addError: (state, action) => {
			state.errorMessages.push(action.payload);
		},
		clearErrors: (state) => {
			state.errorMessages = [];
		},
	},
});

export const { addError, clearErrors } = errorSlice.actions;
export default errorSlice.reducer;
