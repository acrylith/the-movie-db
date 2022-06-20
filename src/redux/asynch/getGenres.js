import axios from "axios"
import {
    fetchMovieGenres,
    fetchMovieGenresSuccess,
    fetchMovieGenresFailed,
    fetchTvGenres,
    fetchTvGenresSuccess,
    fetchTvGenresFailed
} from "../reducers/discoverPageReducer"
import { key } from "./config"

export const getMovieGenres = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchMovieGenres())
            const genresResponse = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`)
            dispatch(fetchMovieGenresSuccess(genresResponse.data))
        }

        catch (e) {
            dispatch(fetchMovieGenresFailed())
        }
    }
}

export const getTvGenres = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchTvGenres())
            const genresResponse = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${key}&language=en-US`)
            dispatch(fetchTvGenresSuccess(genresResponse.data))
        }

        catch (e) {
            dispatch(fetchTvGenresFailed())
        }
    }
}