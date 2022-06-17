const FETCH_MOVIE_DISCOVER = "FETCH_MOVIE_DISCOVER"
const FETCH_MOVIE_DISCOVER_SUCCESS = "FETCH_MOVIE_DISCOVER_SUCCESS"
const FETCH_MOVIE_DISCOVER_FAILED = "FETCH_MOVIE_DISCOVER_FAILED"
const FETCH_TV_DISCOVER = "FETCH_TV_DISCOVER"
const FETCH_TV_DISCOVER_SUCCESS = "FETCH_TV_DISCOVER_SUCCESS"
const FETCH_TV_DISCOVER_FAILED = "FETCH_TV_DISCOVER_FAILED"
const FETCH_MOVIE_GENRES = "FETCH_MOVIE_GENRES"
const FETCH_MOVIE_GENRES_SUCCESS = "FETCH_MOVIE_GENRES_SUCCESS"
const FETCH_MOVIE_GENRES_FAILED = "FETCH_MOVIE_GENRES_FAILED"
const FETCH_TV_GENRES = "FETCH_TV_GENRES"
const FETCH_TV_GENRES_SUCCESS = "FETCH_TV_GENRES_SUCCESS"
const FETCH_TV_GENRES_FAILED = "FETCH_TV_GENRES_FAILED"

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
    },
    genre_movie: {
        data: {},
        isLoading: false,
        error: null
    },
    genre_tv: {
        data: {},
        isLoading: false,
        error: null
    }
}

export const discoverPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_DISCOVER:
            return {
                ...state,
                movie: {
                    data: {},
                    isLoading: true,
                    error: null
                }
            }

        case FETCH_MOVIE_DISCOVER_SUCCESS:
            return {
                ...state,
                movie: {
                    data: action.payload,
                    isLoading: false,
                    error: null
                }
            }

        case FETCH_MOVIE_DISCOVER_FAILED:
            return {
                ...state,
                movie: {
                    data: {},
                    isLoading: false,
                    error: "Something went wrong. Please, open console"
                }
            }
        
        case FETCH_TV_DISCOVER:
            return {
                ...state,
                tv: {
                    data: {},
                    isLoading: true,
                    error: null
                }
            }

        case FETCH_TV_DISCOVER_SUCCESS:
            return {
                ...state,
                tv: {
                    data: action.payload,
                    isLoading: false,
                    error: null
                }
            }

        case FETCH_TV_DISCOVER_FAILED:
            return {
                ...state,
                tv: {
                    data: {},
                    isLoading: false,
                    error: "Something went wrong. Please, open console"
                }
            }

        case FETCH_MOVIE_GENRES:
            return {
                ...state,
                genre_movie: {
                    data: {},
                    isLoading: true,
                    error: null
                }
            }

        case FETCH_MOVIE_GENRES_SUCCESS:
            return {
                ...state,
                genre_movie: {
                    data: action.payload,
                    isLoading: false,
                    error: null
                }
            }

        case FETCH_MOVIE_GENRES_FAILED:
            return {
                ...state,
                genre_movie: {
                    data: {},
                    isLoading: false,
                    error: "Something went wrong. Please, open console"
                }
            }

            case FETCH_TV_GENRES:
                return {
                    ...state,
                    genre_tv: {
                        data: {},
                        isLoading: true,
                        error: null
                    }
                }
    
            case FETCH_TV_GENRES_SUCCESS:
                return {
                    ...state,
                    genre_tv: {
                        data: action.payload,
                        isLoading: false,
                        error: null
                    }
                }
    
            case FETCH_TV_GENRES_FAILED:
                return {
                    ...state,
                    genre_tv: {
                        data: {},
                        isLoading: false,
                        error: "Something went wrong. Please, open console"
                    }
                }

        default:
            return state
    }
}

export const fetchMovieDiscover = () => ({type: FETCH_MOVIE_DISCOVER})
export const fetchMovieDiscoverSuccess = (payload) => ({type: FETCH_MOVIE_DISCOVER_SUCCESS, payload})
export const fetchMovieDiscoverFailed = () => ({type: FETCH_MOVIE_DISCOVER_FAILED})
export const fetchTvDiscover = () => ({type: FETCH_TV_DISCOVER})
export const fetchTvDiscoverSuccess = (payload) => ({type: FETCH_TV_DISCOVER_SUCCESS, payload})
export const fetchTvDiscoverFailed = () => ({type: FETCH_TV_DISCOVER_FAILED})
export const fetchMovieGenres = () => ({type: FETCH_MOVIE_GENRES})
export const fetchMovieGenresSuccess = (payload) => ({type: FETCH_MOVIE_GENRES_SUCCESS, payload})
export const fetchMovieGenresFailed = () => ({type: FETCH_MOVIE_GENRES_FAILED})
export const fetchTvGenres = () => ({type: FETCH_TV_GENRES})
export const fetchTvGenresSuccess = (payload) => ({type: FETCH_TV_GENRES_SUCCESS, payload})
export const fetchTvGenresFailed = () => ({type: FETCH_TV_GENRES_FAILED})