const FETCH_MOVIE_SEARCH = "FETCH_MOVIE_SEARCH"
const FETCH_MOVIE_SEARCH_SUCCESS = "FETCH_MOVIE_SEARCH_SUCCESS"
const FETCH_MOVIE_SEARCH_FAILED = "FETCH_MOVIE_SEARCH_FAILED"
const FETCH_TV_SEARCH = "FETCH_TV_SEARCH"
const FETCH_TV_SEARCH_SUCCESS = "FETCH_TV_SEARCH_SUCCESS"
const FETCH_TV_SEARCH_FAILED = "FETCH_TV_SEARCH_FAILED"

const defaultState = {
    movie: {
        data: {},
        isLoading: false,
        error: null
    },
    tv: {
        data: {},
        isLoading: false,
        error: null
    }
}

export const searchResultReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_SEARCH:
            return {
                ...state,
                movie: {
                    data: {},
                    isLoading: true,
                    error: null
                }
            }

        case FETCH_MOVIE_SEARCH_SUCCESS:
            return {
                ...state,
                movie: {
                    data: action.payload,
                    isLoading: false,
                    error: null
                }
            }

        case FETCH_MOVIE_SEARCH_FAILED:
            return {
                ...state,
                movie: {
                    data: {},
                    isLoading: false,
                    error:  "Something went wrong. Open the console"
                }
            }

        case FETCH_TV_SEARCH:
            return {
                ...state,
                tv: {
                    data: {},
                    isLoading: true,
                    error: null
                }
            }

        case FETCH_TV_SEARCH_SUCCESS:
            return {
                ...state,
                tv: {
                    data: action.payload,
                    isLoading: false,
                    error: null
                }
            }

        case FETCH_TV_SEARCH_FAILED:
            return {
                ...state,
                tv: {
                    data: {},
                    isLoading: false,
                    error: "Something went wrong. Open the console"
                }
            }

        default:
            return state
    }
}

export const fetchMovieSearch = () => ({type: FETCH_MOVIE_SEARCH})
export const fetchMovieSearchSuccess = (payload) => ({type : FETCH_MOVIE_SEARCH_SUCCESS, payload})
export const fetchMovieSearchFailed = () => ({type: FETCH_MOVIE_SEARCH_FAILED})

export const fetchTvSearch = () => ({type:FETCH_TV_SEARCH})
export const fetchTvSearchSuccess = (payload) => ({type: FETCH_TV_SEARCH_SUCCESS, payload})
export const fetchTvSearchFailed = () => ({type: FETCH_TV_SEARCH_FAILED})