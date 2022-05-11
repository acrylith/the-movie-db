import axios from "axios";
import { fetchMovieInfo,
    fetchMovieInfoSuccess,
    fetchMovieInfoFailed,
    fetchMovieCrew,
    fetchMovieCrewSuccess,
    fetchMovieCrewFailed
} from "../reducers/moviePageReducer";

// export const getMovieInfo = (id) => {
//     return function(dispatch) {
//         fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US`)
//             .then(response => response.json())
//             .then(json => dispatch(fetchMovieInfo(json)));

//         fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US`)
//             .then(response => response.json())
//             .then(json => dispatch(fetchMovieCrew(json)))
//     }
// }

export const getMovieInfo = (id) => {
    return async (dispatch) => {
        try {
            dispatch(fetchMovieInfo())
            dispatch(fetchMovieCrew())
            const infoResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US`)
            const crewResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US`)
            setTimeout(() => {
                dispatch(fetchMovieInfoSuccess(infoResponse.data))
                dispatch(fetchMovieCrewSuccess(crewResponse.data))
            }, 1000);
        }

        catch (e) {
            dispatch(fetchMovieInfoFailed)
            dispatch(fetchMovieCrewFailed)
        }
    }
}