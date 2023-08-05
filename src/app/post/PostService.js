import axios from 'axios';

import { baseUrl, config } from '../../utils/utils';

const createPost = async (postData) => {
  const response = await axios.post(
    `${baseUrl}/posts/create`,
    {
      title: postData.title,
      body: postData.body,
      pic: postData.pic,
    },
    config
  );
  // console.log(response);
  return response.data;
};

const getPosts = async () => {
  const response = await axios.get(`${baseUrl}/posts/allposts`, config);
  // console.log(response);
  return response.data;
};

const likePost = async (postId) => {
  const response = await axios.put(
    `${baseUrl}/posts/like`,
    { postId: postId },
    config
  );
  console.log(response);
  return response;
};

const dislikePost = async (postId) => {
  const response = await axios.put(
    `${baseUrl}/posts/dislike`,
    { postId: postId },
    config
  );
  console.log(response);
  return response;
};

export const PostService = { createPost, getPosts, likePost, dislikePost };
