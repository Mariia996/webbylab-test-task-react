import { combineReducers, createReducer } from '@reduxjs/toolkit';

import {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError
} from './auth-actions';

const initialStateToken = {
    token: ''
}
const initialStateError = null;
const initialStateLoading = false;
const initialStateIsAthenticated = false;

const userReducer = createReducer(initialStateToken, {
    [registerRequest]: (state, _) => ({ ...state }),
    [loginRequest]: (state, _) => ({ ...state }),
    // [logoutRequest]: (state, _) => ({ ...state }),
    [registerSuccess]: (_, { payload }) => ({...payload}),
    [loginSuccess]: (_, { payload }) => ({...payload}),
    // [logoutSuccess]: () => initialStateUser,
});


const loadingReducer = createReducer(initialStateLoading, {
    [registerRequest]: () => true,
    [loginRequest]: () => true,
    // [logoutRequest]: () => true,
    [registerSuccess]: () => false,
    [loginSuccess]: () => false,
    // [logoutSuccess]: () => false,
    [registerError]: () => false,
    [loginError]: () => false,
    // [logoutError]: () => false,
});

const isAuthenticated = createReducer(initialStateIsAthenticated, {
    [registerSuccess]: () => true,
    [loginSuccess]: () => true,
    // [logoutSuccess]: () => false,
    [registerError]: () => false,
    [loginError]: () => false,
    // [logoutError]: () => false,
});

const errorReducer = createReducer(initialStateError, {
    [registerError]: (_, { payload }) => payload,
    [registerSuccess]: () => initialStateError,
    [loginError]: (_, { payload }) => payload,
    [loginSuccess]: () => initialStateError,
    // [logoutError]: (_, { payload }) => payload,
    // [logoutSuccess]: () => initialStateError,
});

const reducer = combineReducers({
    token: userReducer,
    loading: loadingReducer,
    isAuthenticated,
    error: errorReducer
});

export default reducer;