import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {
    userName: null,
  },
  token: null,
  isLoading: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, {payload}) => {
        state.currentUser = payload;
        state.isLoading = false;
      },
      logout: (state) => {
        state.currentUser = initialState.currentUser;
        state.isLoading = false;
      },
      register: (state, {payload}) => {
        state.currentUser = payload;
        state.isLoading = false;
      },
      retrieveToken: (state, {payload}) => {
        state.currentUser.userToken = payload;
        state.isLoading = false;
      }
    }
});

export const {login, logout, register, retrieveToken} = authSlice.actions;

// selectors
export const selectUser = (state) => state.auth.currentUser;

export default authSlice.reducer;
