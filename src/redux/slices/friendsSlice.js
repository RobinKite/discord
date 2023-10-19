import { createSlice } from "@reduxjs/toolkit";

const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    friendsList: [],
    friendRequests: [],
  },
  reducers: {
    addFriend: (state, action) => {
      state.friendsList.push(action.payload);
    },
    removeFriend: (state, action) => {
      state.friendsList = state.friendsList.filter(
        (friend) => friend.id !== action.payload,
      );
    },
    sendFriendRequest: (state, action) => {
      state.friendRequests.push(action.payload);
    },
    acceptFriendRequest: (state, action) => {
      const requestId = action.payload;
      const requestIndex = state.friendRequests.findIndex(
        (request) => request.id === requestId,
      );
      if (requestIndex !== -1) {
        const acceptedRequest = state.friendRequests[requestIndex];
        state.friendRequests.splice(requestIndex, 1);
        state.friendsList.push(acceptedRequest);
      }
    },
    rejectFriendRequest: (state, action) => {
      const requestId = action.payload;
      state.friendRequests = state.friendRequests.filter(
        (request) => request.id !== requestId,
      );
    },
  },
});

export const {
  addFriend,
  removeFriend,
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
} = friendsSlice.actions;
export default friendsSlice.reducer;
