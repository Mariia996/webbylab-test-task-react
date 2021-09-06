import { combineReducers, createReducer } from '@reduxjs/toolkit';

import {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    currentUserRequest,
    currentUserSuccess,
    currentUserError,
    logoutRequest,
    logoutSuccess,
    logoutError
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
    [currentUserRequest]: (state, _) => ({...state}),
    [logoutRequest]: (state, _) => ({ ...state }),
    [registerSuccess]: (_, { payload }) => ({...payload}),
    [loginSuccess]: (_, { payload }) => ({ ...payload }),
    [currentUserSuccess]: (_, {payload}) => ({token: payload}),
    [logoutSuccess]: () => initialStateToken,
});


const loadingReducer = createReducer(initialStateLoading, {
    [registerRequest]: () => true,
    [loginRequest]: () => true,
    [currentUserRequest]: () => true,
    [logoutRequest]: () => true,
    [registerSuccess]: () => false,
    [loginSuccess]: () => false,
    [currentUserSuccess]: () => false,
    [logoutSuccess]: () => false,
    [registerError]: () => false,
    [loginError]: () => false,
    [currentUserError]: () => false,
    [logoutError]: () => false,
});

const isAuthenticated = createReducer(initialStateIsAthenticated, {
    [registerSuccess]: () => true,
    [loginSuccess]: () => true,
    [currentUserSuccess]: () => true,
    [logoutSuccess]: () => false,
    [registerError]: () => false,
    [loginError]: () => false,
    [currentUserError]: () => false,
    [logoutError]: () => false,
});

const errorReducer = createReducer(initialStateError, {
    [registerError]: (_, { payload }) => payload,
    [registerSuccess]: () => initialStateError,
    [loginError]: (_, { payload }) => payload,
    [loginSuccess]: () => initialStateError,
    [currentUserError]: (_, { payload }) => payload,
    [currentUserSuccess]: () => initialStateError,
    [logoutError]: (_, { payload }) => payload,
    [logoutSuccess]: () => initialStateError,
});

const reducer = combineReducers({
    token: userReducer,
    loading: loadingReducer,
    isAuthenticated,
    error: errorReducer
});

export default reducer;