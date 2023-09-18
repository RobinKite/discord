import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  username: null,
  password: null,
  firstName: null,
  lastName: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  redusers: {
    setUser(state, action) {
      const { email, username, password, firstName, lastName } = action.payload;
      state.email = email;
      state.username = username;
      state.password = password;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    removeUser(state) {
      state.email = null;
      state.username = null;
      state.password = null;
      state.firstName = null;
      state.lastName = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
