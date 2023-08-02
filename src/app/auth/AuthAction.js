import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from './AuthService';

export const register = createAsyncThunk(
  'auth/signup',
  async (userData, thunkAPI) => {
    try {
      return AuthService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/signin',
  async (userData, thunkAPI) => {
    try {
      return AuthService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetNewPassword = createAsyncThunk(
  'auth/reset_password',
  async (email, thunkAPI) => {
    try {
      return AuthService.resetNewPassword(email);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const newPassword = createAsyncThunk(
  'auth/new_password',
  async (tokenData, thunkAPI) => {
    try {
      return AuthService.newPassword(tokenData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
