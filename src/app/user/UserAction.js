import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserService } from './UserService';

export const logout = createAsyncThunk('user/logout', async (thunkApi) => {
  try {
    return UserService.logout();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (userId, thunkApi) => {
    try {
      return UserService.getUserDetails(userId);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getFollowUser = createAsyncThunk(
  'user/getFollowUser',
  async (userId, thunkApi) => {
    try {
      return UserService.getFollowUser(userId);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getUnfollowUser = createAsyncThunk(
  'user/getUnfollowUser',
  async (userId, thunkApi) => {
    try {
      return UserService.getUnfollowUser(userId);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getSuggestions = createAsyncThunk(
  'user/getSuggestions',
  async (thunkApi) => {
    try {
      return UserService.getSuggestions();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const searchUser = createAsyncThunk(
  'user/searchUser',
  async (query, thunkApi) => {
    try {
      return UserService.searchUser(query);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
