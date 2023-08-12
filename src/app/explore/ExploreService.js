import axios from 'axios';

import { baseUrl, config } from '../../utils/utils';

const getExplorePosts = async () => {
  const response = await axios.get(`${baseUrl}/posts/explore`, config);
  console.log(response.data);
  return response.data;
};

export const ExploreService = { getExplorePosts };
