import { createAsyncThunk } from '@reduxjs/toolkit';

import { profileService } from './ProfileService';

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (thunkAPI) => {
    try {
      return profileService.getProfile();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSavedPosts = createAsyncThunk(
  'profile/getMySavedPosts',
  async (thunkAPI) => {
    try {
      return profileService.getSavedPosts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'profile/updateUserProfile',
  async (userData, thunkAPI) => {
    try {
      return profileService.updateUserProfile(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
