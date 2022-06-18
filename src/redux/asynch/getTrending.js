import axios from "axios";
import {
    fetchTrandingMovies,
    fetchTrandingMoviesFailed,
    fetchTrandingMoviesSuccess,
    fetchTrandingTV,
    fetchTrandingTVSuccess,
    fetchTrandingTVFAiled
} from "../reducers/trendingReducer";

export const getTrendingMovies = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchTrandingMovies())
            const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=d557a3ab1c050ec40d2b6700e34ce8ad&`)
            setTimeout(() => {
                dispatch(fetchTrandingMoviesSuccess(response.data))
            }, 1000)
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
            const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=d557a3ab1c050ec40d2b6700e34ce8ad&`)
            setTimeout(() => {
                dispatch(fetchTrandingTVSuccess(response.data))
            }, 1000);
        }
        catch (e) {
            dispatch(fetchTrandingTVFAiled)
        }
    }
}