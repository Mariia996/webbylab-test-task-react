import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import user from './auth/auth-reducer';

const middleware = [
  ...getDefaultMiddleware(),
];

export const store = configureStore({
    reducer: {
      auth: user,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});