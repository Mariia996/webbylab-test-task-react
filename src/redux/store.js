import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import user from './auth/auth-reducer';
import movies from './movies/movies-reducer';

const middleware = [
  ...getDefaultMiddleware(),
];

export const store = configureStore({
    reducer: {
      auth: user,
      movies
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});