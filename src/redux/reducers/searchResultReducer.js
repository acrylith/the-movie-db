const FETCH_MOVIE_SEARCH = "FETCH_MOVIE_SEARCH"
const FETCH_TV_SEARCH = "FETCH_TV_SEARCH"

const defaultState = {
    movie: {},
    tv: {}
}

export const searchResultReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_SEARCH:
            return {
                ...state,
                movie: action.payload
            }

        case FETCH_TV_SEARCH:
            return {
                ...state,
                tv: action.payload
            }

        default:
            return state
    }
}

export const fetchMovieSearch = (payload) => ({type: FETCH_MOVIE_SEARCH, payload})
export const fetchTvSearch = (payload) => ({type:FETCH_TV_SEARCH, payload})