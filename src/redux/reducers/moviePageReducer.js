const FETCH_MOVIE_INFO = "FETCH_MOVIE_INFO"
const FETCH_MOVIE_CREW = "FETCH_MOVIE_CREW"
const FETCH_IMDB_INFO = "FETCH_IMDB_INFO"

const defaultState = {
    info: {},
    crew: {},
    imdb: {}
}

export const moviePageReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_MOVIE_INFO:
            return {
                ...state,
                info: action.payload
            }

        case FETCH_MOVIE_CREW:
            return {
                ...state,
                crew: action.payload
            }
        
        case FETCH_IMDB_INFO:
            return {
                ...state,
                imdb: action.payload
            }

        default:
            return state
    }
}

export const fetchMovieInfo = (payload) => ({type: FETCH_MOVIE_INFO, payload})
export const fetchMovieCrew = (payload) => ({type: FETCH_MOVIE_CREW, payload})
export const fetchImdbInfo = (payload) => ({type: FETCH_IMDB_INFO, payload})