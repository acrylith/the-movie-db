import { fetchMovieSearch } from '../reducers/searchResultReducer'

export const getMovieSearch = (request) => {
    return function(dispatch) {
        if(request) {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${request}&api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US`)
                .then(response => response.json())
                .then(json => dispatch(fetchMovieSearch(json)));
        }
    }
}