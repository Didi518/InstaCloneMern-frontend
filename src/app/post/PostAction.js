import { createAsyncThunk } from '@reduxjs/toolkit';

import { PostService } from './PostService';

export const createPost = createAsyncThunk(
  'post/create',
  async (postData, thunkAPI) => {
    try {
      return PostService.createPost(postData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPosts = createAsyncThunk('post/allposts', async (thunkAPI) => {
  try {
    return PostService.getPosts();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const likePost = createAsyncThunk(
  'post/likepost',
  async (postId, thunkAPI) => {
    try {
      return PostService.likePost(postId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const dislikePost = createAsyncThunk(
  'post/dislikepost',
  async (postId, thunkAPI) => {
    try {
      return PostService.dislikePost(postId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const savePost = createAsyncThunk(
  'post/savePost',
  async (post, thunkAPI) => {
    try {
      return PostService.savePost(post);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const unSavePost = createAsyncThunk(
  'post/unSavePost',
  async (post, thunkAPI) => {
    try {
      return PostService.unSavePost(post);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createComment = createAsyncThunk(
  'post/createComment',
  async (comment, thunkAPI) => {
    try {
      return PostService.createComment(comment);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteComment = createAsyncThunk(
  'post/deleteComment',
  async (comment, thunkAPI) => {
    try {
      return PostService.deleteComment(comment);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  'post/deletePost',
  async (postId, thunkAPI) => {
    try {
      return PostService.deletePost(postId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
