import { createSlice } from '@reduxjs/toolkit';

import {
  createComment,
  createPost,
  deleteComment,
  deletePost,
  dislikePost,
  getPosts,
  likePost,
  savePost,
  unSavePost,
} from './PostAction';
import { DeleteData, EditData } from './PostFunction';

const initialState = {
  posts: [],
  isError: false,
  isLoading: false,
  isPostSuccess: false,
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
      })
      .addCase(savePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(savePost.fulfilled, (state, action) => {
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
      .addCase(savePost.rejected, (state, action) => {
        console.log('erreur', action);
        state.isLoading = false;
        state.isError = true;
        state.isPostSuccess = false;
        state.message = 'erreur';
      })
      .addCase(unSavePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(unSavePost.fulfilled, (state, action) => {
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
      .addCase(unSavePost.rejected, (state, action) => {
        console.log('erreur', action);
        state.isLoading = false;
        state.isError = true;
        state.isPostSuccess = false;
        state.message = 'erreur';
      })
      .addCase(createComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
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
      .addCase(createComment.rejected, (state, action) => {
        console.log('err', action);
        state.isLoading = false;
        state.isError = true;
        state.isPostSuccess = false;
        state.message = 'erreur';
      })
      .addCase(deleteComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
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
      .addCase(deleteComment.rejected, (state, action) => {
        console.log('err', action);
        state.isLoading = false;
        state.isError = true;
        state.isPostSuccess = false;
        state.message = 'erreur';
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isPostSuccess = true;
        state.posts = DeleteData(state.posts, action.payload.data.result._id);
        state.message = 'succès';
      })
      .addCase(deletePost.rejected, (state, action) => {
        console.log('err', action);
        state.isLoading = false;
        state.isError = true;
        state.isPostSuccess = false;
        state.message = 'erreur';
      });
  },
});

export default postSlice.reducer;
