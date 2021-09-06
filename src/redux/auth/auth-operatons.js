import AuthService from './auth-service';

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

const authService = new AuthService();

export const register = body => async dispatch => {
    dispatch(registerRequest())
    try {
        const data = await authService.reister(body);
        dispatch(registerSuccess(data))
    } catch (error) {
        dispatch(registerError(error))
    }
}

export const login = body => async dispatch => {
    dispatch(loginRequest())
    try {
        const data = await authService.login(body);
        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginError(error))
    }
}

export const currentUser = () => async dispatch => {
    dispatch(currentUserRequest())
    try {
        const token = await authService.getToken();
        dispatch(currentUserSuccess(token))
    } catch (error) {
        dispatch(currentUserError(error))
    }
}

export const logout = () => async dispatch => {
    dispatch(logoutRequest())
    try {
        await authService.removeToken();
        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutError(error))
    }
}