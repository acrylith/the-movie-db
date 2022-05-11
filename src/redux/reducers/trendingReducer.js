const FETCH_TRENDING_MOVIES = "FETCH_TRENDING_MOVIES";
const FETCH_TRENDING_MOVIES_SUCCESS = "FETCH_TRENDING_MOVIES_SUCCESS";
const FETCH_TRENDING_MOVIES_FAILED = "FETCH_TRENDING_MOVIES_FAILED";
const FETCH_TRENDING_TV = "FETCH_TRENDING_TV";
const FETCH_TRENDING_TV_SUCCESS = "FETCH_TRENDING_TV_SUCCESS";
const FETCH_TRENDING_TV_FAILED = "FETCH_TRENDING_TV_FAILED";
 
const defaultState = {
    movies: {
        list: {},
        isLoading: false,
        error: null
    },
    tv: {
        list: {},
        isLoading: false,
        error: null
    },
}

export const trendingReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_TRENDING_MOVIES:
            return {
                ...state,
                movies: {
                    list: {},
                    isLoading: true,
                    error: null
                }
            }

        case FETCH_TRENDING_MOVIES_SUCCESS:
            return {
                ...state,
                movies: {
                    list: action.payload,
                    isLoading: false,
                    error: null
                }
            }

        case FETCH_TRENDING_MOVIES_FAILED:
            return {
                ...state,
                movies: {
                    list: {},
                    isLoading: false,
                    error: "Something went wrong. Open the console"
                }
            }
        
        case FETCH_TRENDING_TV:
            return {
                ...state,
                tv: {
                    list: {},
                    isLoading: true,
                    error: null
                }
            }

        case FETCH_TRENDING_TV_SUCCESS:
            return {
                ...state,
                tv: {
                    list: action.payload,
                    isLoading: false,
                    error: null
                }
            }

        case FETCH_TRENDING_TV_FAILED:
            return {
                ...state,
                tv: {
                    list: {},
                    isLoading: false,
                    error: "Something went wrong. Open the console"
                }
            }

        default:
            return state
    }
}

export const fetchTrandingMovies = () => ({type: FETCH_TRENDING_MOVIES});
export const fetchTrandingMoviesSuccess = (payload) => ({type: FETCH_TRENDING_MOVIES_SUCCESS, payload});
export const fetchTrandingMoviesFailed = () => ({type: FETCH_TRENDING_MOVIES_FAILED});
export const fetchTrandingTV = () => ({type: FETCH_TRENDING_TV});
export const fetchTrandingTVSuccess = (payload) => ({type: FETCH_TRENDING_TV_SUCCESS, payload});
export const fetchTrandingTVFAiled = () => ({type: FETCH_TRENDING_TV_FAILED});