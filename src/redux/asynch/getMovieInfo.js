import axios from "axios";
import { fetchMovieInfo,
    fetchMovieInfoSuccess,
    fetchMovieInfoFailed,
    fetchMovieCrew,
    fetchMovieCrewSuccess,
    fetchMovieCrewFailed
} from "../reducers/moviePageReducer";
import { key } from "./config";

export const getMovieInfo = (id) => {
    return async (dispatch) => {
        try {
            dispatch(fetchMovieInfo())
            dispatch(fetchMovieCrew())
            const infoResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
            const crewResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
            dispatch(fetchMovieInfoSuccess(infoResponse.data))
            dispatch(fetchMovieCrewSuccess(crewResponse.data))
        }

        catch (e) {
            dispatch(fetchMovieInfoFailed)
            dispatch(fetchMovieCrewFailed)
        }
    }
}