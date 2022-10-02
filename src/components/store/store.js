import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { isLoggedIn: false },
  reducers: {
    loginAccount(state) {
      state.isLoggedIn = true;
    },
    logoutAccount(state) {
      state.isLoggedIn = false;
    },
  },
});

const userInfoSlice = createSlice({
  name: "info",
  initialState: {
    displayName: null,
    userName: null,
    profileImage:
      "https://us.123rf.com/450wm/gmast3r/gmast3r1411/gmast3r141100350/33865095-businessman-profile-icon-male-portrait-flat.jpg?ver=6",
  },
  reducers: {
    addUser(state, actions) {
      state.displayName = actions.payload.displayName;
      state.userName = actions.payload.userName;
      state.profileImage = actions.payload.image;
    },
  },
});

const store = configureStore({
  reducer: { isLoggedIn: loginSlice.reducer, userInfo: userInfoSlice.reducer },
});

export default store;
export const loginActions = loginSlice.actions;
export const userActions = userInfoSlice.actions;
