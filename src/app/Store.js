import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/AuthSlice';
import postReducer from './post/PostSlice';
import userReducer from './user/UserSlice';
import profileReducer from './profile/ProfileSlice';
import exploreReducer from './explore/ExploreSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    user: userReducer,
    profile: profileReducer,
    explore: exploreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
