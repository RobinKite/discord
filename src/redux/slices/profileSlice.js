import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userProfile: null,
  },
  reducers: {
    setProfile: (state, action) => {
      console.log(action);
      state.userProfile = action.payload;
    },
    updateProfileField: (state, action) => {
      const { field, value } = action.payload;
      state.userProfile[field] = value;
    },
    setProfileNote: (state, action) => {
      state.userProfile.note = action.payload;
    },
  },
});

export const { setProfile, setProfileNote } = profileSlice.actions;
export default profileSlice.reducer;
