import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    tokenUser: ''
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.tokenUser = action.payload.accessToken
    },
    loginUpdate: (state, action) => {
      state.currentUser = null;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteData_user: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
      state.tokenUser = ''
    }
  },
});

export const { deleteData_user, loginStart, loginSuccess, loginFailure, loginUpdate } = userSlice.actions;
export default userSlice.reducer;