import MoviesService from "./movies-service";

import {
    importMoviesRequest,
    importMoviesSuccess,
    importMoviesError,
    getMoviesRequest,
    getMoviesSuccess,
    getMoviesError
} from './movies-actions';

const moviesService = new MoviesService();

export const importMovies = body => async dispatch => {
    dispatch(importMoviesRequest());
    try {
        const data = await moviesService.import(body);
        dispatch(importMoviesSuccess(data));
    } catch (error) {
        dispatch(importMoviesError(error));
    }
};

export const getMovies = params => async dispatch => {
    dispatch(importMoviesRequest());
    try {
        const data = await moviesService.get(params);
        dispatch(importMoviesSuccess(data));
    } catch (error) {
        dispatch(importMoviesError(error));
    }
};