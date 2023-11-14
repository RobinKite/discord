import { api } from "@/services/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Endpoint } from "@/constants/api";
import { SAMPLE_FRIENDS } from "@/constants/mock";

const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    friendsList: [...SAMPLE_FRIENDS],
    friendRequests: [],
    status: null,
  },
  reducers: {
    addFriend: (state, action) => {
      state.friendsList.push(action.payload);
    },
    removeFriend: (state, action) => {
      state.friendsList = state.friendsList.filter(
        friend => friend.id !== action.payload
      );
    },
    sendFriendRequest: (state, action) => {
      state.status = "pending";
      state.friendRequests.push(action.payload);
    },
    acceptFriendRequest: (state, action) => {
      const requestId = action.payload;
      const requestIndex = state.friendRequests.findIndex(
        request => request.id === requestId
      );
      if (requestIndex !== -1) {
        const acceptedRequest = state.friendRequests[requestIndex];
        state.friendRequests.splice(requestIndex, 1);
        state.friendsList.push(acceptedRequest);
        state.status = null;
      }
    },
    rejectFriendRequest: (state, action) => {
      const requestId = action.payload;
      state.friendRequests = state.friendRequests.filter(
        request => request.id !== requestId
      );
      state.status = null;
    },
  },
});

export const createFriendRequest = createAsyncThunk(
  Endpoint.USERS_INVITES,
  async (userId, thunkAPI) => {
    const result = await api.post(Endpoint.USERS_INVITES, userId);
    console.log(result);
    thunkAPI.dispatch(sendFriendRequest(result.data));
    return result;
  }
);

// export const friendRequestAccepted = createAsyncThunk(
//   Endpoint.INVITE_ACCEPTED,
//   async (userId, thunkAPI) => {
//     const result = await api.post(Endpoint.INVITE_ACCEPTED, userId);
//     console.log(result);
//     thunkAPI.dispatch(acceptFriendRequest(result.data));
//     return result;
//   }
// );

// export const friendRequestRejected = createAsyncThunk(
//   Endpoint.INVITE_REJECTED,
//   async (userId, thunkAPI) => {
//     const result = await api.post(Endpoint.INVITE_REJECTED, userId);

//     console.log(result);
//     thunkAPI.dispatch(rejectFriendRequest(result.data));
//     return result;
//   }
// );

export const {
  addFriend,
  removeFriend,
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
} = friendsSlice.actions;
export default friendsSlice.reducer;
