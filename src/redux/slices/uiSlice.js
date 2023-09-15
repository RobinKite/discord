import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: "ui",
	initialState: {
		modalIsOpen: false,
		isLoading: false,
	},
	reducers: {
		openModal: (state) => {
			state.modalIsOpen = true;
		},
		closeModal: (state) => {
			state.modalIsOpen = false;
		},
		startLoading: (state) => {
			state.isLoading = true;
		},
		stopLoading: (state) => {
			state.isLoading = false;
		},
	},
});

export const { openModal, closeModal, startLoading, stopLoading } =
	uiSlice.actions;
export default uiSlice.reducer;
