import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
	name: "error",
	initialState: {
		errorMessages: [],
	},
	reducers: {
		addError: (state, action) => {
			const { id, code, message } = action.payload;
			state.errorMessages.push({ id, code, message });
		},
		removeError: (state, action) => {
			const errorIndex = state.errorMessages.indexOf(action.payload);
			if (errorIndex !== -1) {
				state.errorMessages.splice(errorIndex, 1);
			}
		},
		clearErrors: (state) => {
			state.errorMessages = [];
		},
	},
});

export const { addError, clearErrors, removeError } = errorSlice.actions;
export default errorSlice.reducer;
