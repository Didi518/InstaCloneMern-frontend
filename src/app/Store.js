import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/AuthSlice';
import postReducer from './post/PostSlice';

export const store = configureStore({
  reducer: { auth: authReducer, post: postReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
