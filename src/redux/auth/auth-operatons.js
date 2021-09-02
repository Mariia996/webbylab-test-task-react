import AuthService from './auth-service';

import {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError
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