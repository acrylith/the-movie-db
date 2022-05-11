import { fetchMovieDiscover, fetchTvDiscover } from "../reducers/discoverPageReducer";

export const getMoviesWithGenre = (request) => {
    return function(dispatch) {
        if (request) {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US&sort_by=popularity.desc&page=1&with_genres=${request}`)
                .then(response => response.json())
                .then(json => dispatch(fetchMovieDiscover(json)));
        }
    }
}