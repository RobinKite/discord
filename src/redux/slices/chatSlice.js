import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatRooms: [],
  },
  reducers: {
    addChatRoom: (state, action) => {
      state.chatRooms.push(action.payload);
    },
    removeChatRoom: (state, action) => {
      state.chatRooms = state.chatRooms.filter(
        (room) => room.id !== action.payload
      );
    },
  },
});

export const { addChatRoom, removeChatRoom } = chatSlice.actions;
export default chatSlice.reducer;
