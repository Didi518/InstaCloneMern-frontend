import { createSlice } from '@reduxjs/toolkit';

import {
  getFollowUser,
  getSuggestions,
  getUnfollowUser,
  getUserDetails,
  logout,
  searchUser,
} from './UserAction';

const initialState = {
  user: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
  userProfile: [],
  userSuggestion: [],
  isSearchSuccess: '',
  isSuggestionSuccess: false,
  userSearch: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = action.payload.msg;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = 'erreur';
      })
      .addCase(getUserDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.userProfile = action.payload;
        state.message = 'Succès';
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = 'erreur';
      })
      .addCase(getFollowUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFollowUser.fulfilled, (state, action) => {
        console.log('actn', action);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.userProfile = action.payload;
        state.userPosts = action.payload.posts;
        state.message = 'Succès';
      })
      .addCase(getFollowUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = 'erreur';
      })
      .addCase(getUnfollowUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUnfollowUser.fulfilled, (state, action) => {
        console.log('actn', action);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.userProfile = action.payload;
        // state.userPosts = action.payload.posts;
        state.message = 'Succès';
      })
      .addCase(getUnfollowUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = 'erreur';
      })
      .addCase(getSuggestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSuggestions.fulfilled, (state, action) => {
        console.log('actn', action);
        state.isLoading = false;
        state.isError = false;
        state.isSuggestionSuccess = true;
        state.userSuggestion = action.payload.users;
        state.message = 'Succès';
      })
      .addCase(getSuggestions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuggestionSuccess = false;
        state.message = 'erreur';
      })
      .addCase(searchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchUser.fulfilled, (state, action) => {
        console.log('actn', action);
        state.isLoading = false;
        state.isError = false;
        state.isSearchSuccess = true;
        state.userSearch = action.payload.user;
        state.message = 'Succès';
      })
      .addCase(searchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSearchSuccess = false;
        state.message = 'erreur';
      });
  },
});

export default userSlice.reducer;
