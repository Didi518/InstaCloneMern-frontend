import axios from 'axios';

import { baseUrl, config } from '../../utils/utils';

const logout = async () => {
  const response = await axios.get(`${baseUrl}/users/logout`, config);
  localStorage.clear();
  window.href = '/';
  return response.data;
};

const getUserDetails = async (userId) => {
  const response = await axios.get(`${baseUrl}/users/user/${userId}`, config);
  // console.log(response);
  return response.data;
};

const getFollowUser = async (userId) => {
  const response = await axios.put(
    `${baseUrl}/users/follow`,
    { followId: userId },
    config
  );
  console.log(response.data);
  if (response.data) {
    localStorage.setItem('utilisateur', JSON.stringify(response.data));
  }
  const updateUser = getUserDetails(userId);
  return updateUser;
};

const getUnfollowUser = async (userId) => {
  const response = await axios.put(
    `${baseUrl}/users/unfollow`,
    { unfollowId: userId },
    config
  );
  console.log(response.data);
  if (response.data) {
    localStorage.setItem('utilisateur', JSON.stringify(response.data));
  }
  const updateUser = getUserDetails(userId);
  return updateUser;
};

const getSuggestions = async () => {
  const response = await axios.get(`${baseUrl}/users/suggestions`, config);
  // console.log(response);
  return response.data;
};

const searchUser = async (query) => {
  const response = await axios.post(
    `${baseUrl}/users/search`,
    { query },
    config
  );
  // console.log(response);
  return response.data;
};

export const UserService = {
  logout,
  getUserDetails,
  getFollowUser,
  getUnfollowUser,
  getSuggestions,
  searchUser,
};
