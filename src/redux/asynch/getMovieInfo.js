import { fetchMovieInfo } from "../reducers/moviePageReducer";
import { fetchMovieCrew } from "../reducers/moviePageReducer";

export const getMovieInfo = (id) => {
    return function(dispatch) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US`)
            .then(response => response.json())
            .then(json => dispatch(fetchMovieInfo(json)));

        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US`)
            .then(response => response.json())
            .then(json => dispatch(fetchMovieCrew(json)))
    }
}