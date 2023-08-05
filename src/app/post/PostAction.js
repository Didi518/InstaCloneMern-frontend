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
