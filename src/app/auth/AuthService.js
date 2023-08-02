import axios from 'axios';

import { baseUrl } from '../../utils/utils';

const register = async (user) => {
  const response = await axios.post(`${baseUrl}/auth/signup`, user);
  console.log(response);
  return response.data;
};

const login = async (user) => {
  const response = await axios.post(`${baseUrl}/auth/signin`, user);
  console.log(response);
  if (response.data) {
    localStorage.setItem('token', JSON.stringify(response.data.access_token));
    localStorage.setItem('utilisateur', JSON.stringify(response.data.user));
  }
  return response.data;
};

const resetNewPassword = async (email) => {
  const response = await axios.post(`${baseUrl}/auth/reset_password`, {
    email,
  });
  return response.data;
};

const newPassword = async (tokenData) => {
  const response = await axios.post(`${baseUrl}/auth/new_password`, {
    password: tokenData.password,
    token: tokenData.token,
  });
  return response.data;
};

export const AuthService = { register, login, resetNewPassword, newPassword };
