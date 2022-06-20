import axios from "axios";
import {
    fetchTrandingMovies,
    fetchTrandingMoviesFailed,
    fetchTrandingMoviesSuccess,
    fetchTrandingTV,
    fetchTrandingTVSuccess,
    fetchTrandingTVFAiled
} from "../reducers/trendingReducer";
import { key } from './config';

export const getTrendingMovies = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchTrandingMovies())
            const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&`)
            dispatch(fetchTrandingMoviesSuccess(response.data))
        }
        catch (e) {
            dispatch(fetchTrandingMoviesFailed)
        }
    }
}

export const getTrendingTV = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchTrandingTV())
            const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${key}&`)
            dispatch(fetchTrandingTVSuccess(response.data))
        }
        catch (e) {
            dispatch(fetchTrandingTVFAiled)
        }
    }
}