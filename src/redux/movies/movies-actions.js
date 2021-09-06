import { createAction } from "@reduxjs/toolkit";

export const importMoviesRequest = createAction("movies/importMoviesRequest");
export const importMoviesSuccess = createAction("movies/importMoviesSuccess");
export const importMoviesError = createAction("movies/importMoviesError");

export const getMoviesRequest = createAction("movies/getMoviesRequest");
export const getMoviesSuccess = createAction("movies/getMoviesSuccess");
export const getMoviesError = createAction("movies/getMoviesError");