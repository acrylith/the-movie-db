const FETCH_MOVIE_INFO = "FETCH_MOVIE_INFO"
const FETCH_MOVIE_INFO_SUCCESS = "FETCH_MOVIE_INFO_SUCCESS"
const FETCH_MOVIE_INFO_FAILED = "FETCH_MOVIE_INFO_FAILED"
const FETCH_MOVIE_CREW = "FETCH_MOVIE_CREW"
const FETCH_MOVIE_CREW_SUCCESS = "FETCH_MOVIE_CREW_SUCCESS"
const FETCH_MOVIE_CREW_FAILED = "FETCH_MOVIE_CREW_FAILED"

const defaultState = {
    info: {
        data: {},
        isLoading: false,
        error: null
    },
    crew: {
        data: {},
        isLoading: false,
        error: null
    }
}

export const moviePageReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_MOVIE_INFO:
            return {
                ...state,
                info: {
                    data: {},
                    isLoading: true,
                    error: null
                }
            }

        case FETCH_MOVIE_INFO_SUCCESS:
            return {
                ...state,
                info: {
                    data: action.payload,
                    isLoading: false,
                    error: null
                }
            }

        case FETCH_MOVIE_INFO_FAILED:
            return {
                ...state,
                info: {
                    data: {},
                    isLoading: false,
                    error:  "Something went wrong. Open the console"
                }
            }

        case FETCH_MOVIE_CREW:
            return {
                ...state,
                crew: {
                    data: {},
                    isLoading: true,
                    error: null
                }
            }

        case FETCH_MOVIE_CREW_SUCCESS:
            return {
                ...state,
                crew: {
                    data: action.payload,
                    isLoading: false,
                    error: null
                }
            }

        case FETCH_MOVIE_CREW_FAILED:
            return {
                ...state,
                crew: {
                    data: {},
                    isLoading: false,
                    error: "Something went wrong. Open the console"
                }
            }

        default:
            return state
    }
}

export const fetchMovieInfo = () => ({type: FETCH_MOVIE_INFO})
export const fetchMovieInfoSuccess = (payload) => ({type: FETCH_MOVIE_INFO_SUCCESS, payload})
export const fetchMovieInfoFailed = () => ({type: FETCH_MOVIE_INFO_FAILED})

export const fetchMovieCrew = () => ({type: FETCH_MOVIE_CREW})
export const fetchMovieCrewSuccess = (payload) => ({type: FETCH_MOVIE_CREW_SUCCESS, payload})
export const fetchMovieCrewFailed = () => ({type: FETCH_MOVIE_CREW_FAILED})