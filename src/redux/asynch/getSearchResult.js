import axios from 'axios';
import {
    fetchMovieSearch,
    fetchMovieSearchSuccess,
    fetchMovieSearchFailed,
    fetchTvSearch,
    fetchTvSearchSuccess,
    fetchTvSearchFailed
} from '../reducers/searchResultReducer';

export const getMovieSearch = (request, page) => {
    return async (dispatch) => {
        try {
            dispatch(fetchMovieSearch())
            const movieResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${request}&page=${page}&api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US`)
            setTimeout(() => {
                dispatch(fetchMovieSearchSuccess(movieResponse.data))
            }, 1000);
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
            const tvResponse = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${request}&page=${page}&api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US`)
            setTimeout(() => {
                dispatch(fetchTvSearchSuccess(tvResponse.data))
            }, 1000);
        }

        catch (e) {
            dispatch(fetchTvSearchFailed)
        }
    }
}