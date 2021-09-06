import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
    importMoviesRequest,
    importMoviesSuccess,
    importMoviesError,
    getMoviesRequest,
    getMoviesSuccess,
    getMoviesError
} from './movies-actions';

const initialStateMovies = [];
const initialStateLoading = false;
const initialStateError = null;

const moviesReducer = createReducer(initialStateMovies, {
    [importMoviesRequest]: (state, _) => ([...state]),
    [importMoviesSuccess]: (_, payload) => ([...payload]),
})

const loadingReducer = createReducer(initialStateLoading, {
    [importMoviesRequest]: () => true,
    [importMoviesSuccess]: () => false,
    [importMoviesError]: () => false,
});

const errorReducer = createReducer(initialStateError, {
    [importMoviesError]: (_, { payload }) => payload,
    [importMoviesSuccess]: () => initialStateError,
});

const reducer = combineReducers({
    movies: moviesReducer,
    loading: loadingReducer,
    error: errorReducer
});

export default reducer;