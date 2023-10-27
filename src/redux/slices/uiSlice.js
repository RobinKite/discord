import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    modalStack: [],
    isLoading: false,
    isUserListShown: false,
    isStreamingChatShown: false,
    isFullScreen: false,
    popupContent: {},
    popupPosition: [],
  },
  reducers: {
    setPopUpPosition: (state, action) => {
      state.popupPosition = action.payload;
    },
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
    fillPopupContent: (state, action) => {
      state.popupContent = action.payload;
    },
    toggleStreamingChatShown: (state) => {
      state.isStreamingChatShown = !state.isStreamingChatShown;
    },
    toggleFullScreen: (state) => {
      state.isFullScreen = !state.isFullScreen;
    },
  },
});

export const {
  openModal,
  closeModal,
  startLoading,
  stopLoading,
  fillPopupContent,
  setPopUpPosition,
  toggleUserList,
  toggleStreamingChatShown,
  toggleFullScreen,
} = uiSlice.actions;

export default uiSlice.reducer;
