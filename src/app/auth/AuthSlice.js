import { createSlice } from '@reduxjs/toolkit';

import { login, newPassword, register, resetNewPassword } from './AuthAction';
import { getUserFromLocalStorage } from '../../utils/utils';

const initialState = {
  isLoading: false,
  isError: false,
  isRegisterSuccess: false,
  message: '',
  isLoginSuccess: false,
  user: getUserFromLocalStorage,
  isNewPasswordSuccess: false,
  isPasswordSuccess: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isRegisterSuccess = true;
        state.message = action.payload.msg;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isRegisterSuccess = false;
        state.message = '';
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log('action', action);
        state.isLoading = false;
        state.isError = false;
        state.isRegisterSuccess = false;
        state.isLoginSuccess = true;
        state.user = action.payload;
        state.message = action.payload.msg;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isRegisterSuccess = false;
        state.isLoginSuccess = false;
        state.message = '';
      })
      .addCase(resetNewPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetNewPassword.fulfilled, (state, action) => {
        console.log('action', action);
        state.isLoading = false;
        state.isError = false;
        state.isRegisterSuccess = false;
        state.isLoginSuccess = false;
        state.isNewPasswordSuccess = true;
        state.message = action.payload.msg;
      })
      .addCase(resetNewPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isRegisterSuccess = false;
        state.isLoginSuccess = false;
        state.isNewPasswordSuccess = false;
        state.message = '';
      })
      .addCase(newPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newPassword.fulfilled, (state, action) => {
        console.log('action', action);
        state.isLoading = false;
        state.isError = false;
        state.isRegisterSuccess = false;
        state.isLoginSuccess = false;
        state.isNewPasswordSuccess = false;
        state.isPasswordSuccess = true;
        state.message = action.payload.msg;
      })
      .addCase(newPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isRegisterSuccess = false;
        state.isLoginSuccess = false;
        state.isNewPasswordSuccess = false;
        state.isPasswordSuccess = false;
        state.message = '';
      });
  },
});

export default authSlice.reducer;
