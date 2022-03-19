import { fetchMovieSearch, fetchTvSearch } from '../reducers/searchResultReducer'

export const getMovieSearch = (request, page) => {
    return function(dispatch) {
        if(request) {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${request}&page=${page}&api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US`)
                .then(response => response.json())
                .then(json => dispatch(fetchMovieSearch(json)));
        }
    }
}

export const getTVSearch = (request, page) => {
    return function(dispatch) {
        if(request) {
            if(request) {
                fetch(`https://api.themoviedb.org/3/search/tv?query=${request}&page=${page}&api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US`)
                    .then(response => response.json())
                    .then(json => dispatch(fetchTvSearch(json)));
            }
        }
    }
}