import axios from 'axios';

import { baseUrl, config } from '../../utils/utils';

const getProfile = async () => {
  const response = await axios.get(`${baseUrl}/users/mypost`, config);
  console.log(response.data);
  return response.data;
};

const getSavedPosts = async () => {
  const response = await axios.get(`${baseUrl}/users/mysavedposts`, config);
  console.log(response.data);
  return response.data;
};

const updateUserProfile = async (userData) => {
  const response = await axios.put(
    `${baseUrl}/users/update_profile`,
    { name: userData.name, password: userData.password, email: userData.email },
    config
  );
  // console.log(response);
  if (response.data) {
    localStorage.setItem('utilisateur', JSON.stringify(response.data.result));
  }
  window.location.reload(true);
  return response.data;
};

export const profileService = { getProfile, getSavedPosts, updateUserProfile };
