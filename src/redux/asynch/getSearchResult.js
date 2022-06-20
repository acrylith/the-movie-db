import axios from 'axios';
import {
    fetchMovieSearch,
    fetchMovieSearchSuccess,
    fetchMovieSearchFailed,
    fetchTvSearch,
    fetchTvSearchSuccess,
    fetchTvSearchFailed
} from '../reducers/searchResultReducer';
import { key } from './config';

export const getMovieSearch = (request, page) => {
    return async (dispatch) => {
        try {
            dispatch(fetchMovieSearch())
            const movieResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${request}&page=${page}&api_key=${key}&language=en-US`)
            dispatch(fetchMovieSearchSuccess(movieResponse.data))
        }

        catch (e) {
            dispatch(fetchMovieSearchFailed())
        }
    }
}

export const getTVSearch = (request, page) => {
    return async (dispatch) => {
        try {
            dispatch(fetchTvSearch())
            const tvResponse = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${request}&page=${page}&api_key=${key}&language=en-US`)
            dispatch(fetchTvSearchSuccess(tvResponse.data))
        }

        catch (e) {
            dispatch(fetchTvSearchFailed)
        }
    }
}