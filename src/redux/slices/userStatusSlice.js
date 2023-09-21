import { createSlice } from "@reduxjs/toolkit";

const userStatusSlice = createSlice({
  name: "userStatus",
  initialState: { users: [] },
  reducers: {
    setUserStatus: (state, action) => {
      // const { userId, status, userName, role } = action.payload;
      state.users = [...action.payload];
    },
  },
});

export const { setUserStatus } = userStatusSlice.actions;
export default userStatusSlice.reducer;
