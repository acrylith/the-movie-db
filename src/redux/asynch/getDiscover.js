import axios from 'axios';
import {
    fetchMovieDiscover,
    fetchMovieDiscoverFailed,
    fetchMovieDiscoverSuccess,
    fetchTvDiscover,
    fetchTvDiscoverFailed,
    fetchTvDiscoverSuccess,
}
from "../reducers/discoverPageReducer";
import { key } from './config';

export const getMoviesDiscover = (request, page) => {
    return async (dispatch) => {
        try {
            dispatch(fetchMovieDiscover())
            const movieResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${request}`)
            dispatch(fetchMovieDiscoverSuccess(movieResponse.data))
        }

        catch (e) {
            dispatch(fetchMovieDiscoverFailed())
        }
    }
}

export const getTvDiscover = (request, page) => {
    return async (dispatch) => {
        try {
            dispatch(fetchTvDiscover())
            const tvResponse = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${request}`)
            dispatch(fetchTvDiscoverSuccess(tvResponse.data))
        }

        catch (e) {
            dispatch(fetchTvDiscoverFailed())
        }
    }
}