import { createSlice } from '@reduxjs/toolkit';

import { getProfile, getSavedPosts, updateUserProfile } from './ProfileAction';

const initialState = {
  profile: [],
  savedPosts: [],
  isError: false,
  isLoading: false,
  isSuccess: true,
  message: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        console.log('action', action);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.profile = action.payload.myPost;
        state.message = action.payload.msg;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = 'erreur';
      })
      .addCase(getSavedPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSavedPosts.fulfilled, (state, action) => {
        console.log('action', action);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.savedPosts = action.payload.myPosts;
        state.message = action.payload.msg;
      })
      .addCase(getSavedPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = 'erreur';
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        console.log('action', action);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.profile = action.payload.result;
        state.message = action.payload.msg;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = 'erreur';
      });
  },
});

export default profileSlice.reducer;
