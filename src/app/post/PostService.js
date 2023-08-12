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

const savePost = async (post) => {
  const response = await axios.put(
    `${baseUrl}/posts/save`,
    { postId: post._id, profilePic: post.postedBy.pic },
    config
  );
  console.log(response);
  return response;
};

const unSavePost = async (post) => {
  const savedPost = post.saved.find((save) => {
    return save.postId === post._id;
  });
  const response = await axios.put(
    `${baseUrl}/posts/unsave`,
    { postId: post._id, savedId: savedPost._id },
    config
  );
  console.log(response);
  return response;
};

const createComment = async (comment) => {
  const response = await axios.put(
    `${baseUrl}/posts/comment`,
    { text: comment.text, postId: comment.postId },
    config
  );
  // console.log(response);
  return response;
};

const deleteComment = async (comment) => {
  const response = await axios.put(
    `${baseUrl}/posts/deletecomment`,
    {
      commentText: comment.record.text,
      postId: comment.postId,
      commentPostedBy: comment.record.postedBy._id,
      commentId: comment.record._id,
    },
    config
  );
  return response;
};

const deletePost = async (postId) => {
  const response = await axios.delete(
    `${baseUrl}/posts/delete/${postId}`,
    config
  );
  console.log(response);
  return response;
};

export const PostService = {
  createPost,
  getPosts,
  likePost,
  dislikePost,
  savePost,
  unSavePost,
  createComment,
  deleteComment,
  deletePost,
};
