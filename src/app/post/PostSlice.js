import { createSlice } from '@reduxjs/toolkit';

import { createPost, dislikePost, getPosts, likePost } from './PostAction';
import { EditData } from './PostFunction';

const initialState = {
  posts: [],
  isError: false,
  isLoading: false,
  isPostSuccess: true,
  message: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isPostSuccess = true;
        state.posts = action.payload.result;
        state.message = action.payload.msg;
      })
      .addCase(createPost.rejected, (state, action) => {
        console.log('erreur', action);
        state.isLoading = false;
        state.isError = true;
        state.isPostSuccess = false;
        state.message = 'erreur';
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isPostSuccess = true;
        state.posts = action.payload.posts;
        state.message = 'succès';
      })
      .addCase(getPosts.rejected, (state, action) => {
        console.log('erreur', action);
        state.isLoading = false;
        state.isError = true;
        state.isPostSuccess = false;
        state.message = 'erreur';
      })
      .addCase(likePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isPostSuccess = true;
        state.posts = EditData(
          state.posts,
          action.payload.data._id,
          action.payload.data
        );
        state.message = 'succès';
      })
      .addCase(likePost.rejected, (state, action) => {
        console.log('erreur', action);
        state.isLoading = false;
        state.isError = true;
        state.isPostSuccess = false;
        state.message = 'erreur';
      })
      .addCase(dislikePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isPostSuccess = true;
        state.posts = EditData(
          state.posts,
          action.payload.data._id,
          action.payload.data
        );
        state.message = 'succès';
      })
      .addCase(dislikePost.rejected, (state, action) => {
        console.log('erreur', action);
        state.isLoading = false;
        state.isError = true;
        state.isPostSuccess = false;
        state.message = 'erreur';
      });
  },
});

export default postSlice.reducer;
