import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    modalStack: [],
    isLoading: false,
    isUserListShown: false,
    popupContent: {},
  },
  reducers: {
    openModal: (state, action) => {
      state.modalStack.push(action.payload);
    },
    closeModal: state => {
      state.modalStack.pop();
    },
    startLoading: state => {
      state.isLoading = true;
    },
    stopLoading: state => {
      state.isLoading = false;
    },
    toggleUserList: state => {
      state.isUserListShown = !state.isUserListShown;
    },
    fillPopupContent: (state, action) => {
      state.popupContent = action.payload;
    },
  },
});

export const { toggleUserList } = uiSlice.actions;
export const {
  openModal,
  closeModal,
  startLoading,
  stopLoading,
  fillPopupContent,
} = uiSlice.actions;
export default uiSlice.reducer;
