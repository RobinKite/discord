import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    modalStack: [],
    isLoading: false,
    isUserListShown: false,
  },
  reducers: {
    openModal: (state, action) => {
      state.modalStack.push(action.payload);
    },
    closeModal: (state) => {
      state.modalStack.pop();
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    toggleUserList: (state) => {
      state.isUserListShown = !state.isUserListShown;
    },
  },
});

export const { toggleUserList } = uiSlice.actions;
export const { openModal, closeModal, startLoading, stopLoading } =
  uiSlice.actions;
export default uiSlice.reducer;
