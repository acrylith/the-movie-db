const FETCH_MOVIE_DISCOVER = "FETCH_MOVIE_DISCOVER"
const FETCH_TV_DISCOVER = "FETCH_TV_DISCOVER"

const defaultState = {
    movies: {},
    tv: {}
}

export const discoverPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_DISCOVER:
            return {
                ...state,
                movies: action.payload
            }
        
        case FETCH_TV_DISCOVER:
            return {
                ...state,
                tv: action.payload
            }

        default:
            return state
    }
}

export const fetchMovieDiscover = (payload) => ({type: FETCH_MOVIE_DISCOVER, payload})
export const fetchTvDiscover = (payload) => ({type: FETCH_TV_DISCOVER, payload})