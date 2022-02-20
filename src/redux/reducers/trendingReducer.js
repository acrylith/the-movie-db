const FETCH_TRENDING_MOVIES = "FETCH_TRENDING_MOVIES";
const FETCH_TRENDING_TV = "FETCH_TRENDING_TV";

const defaultState = {
    movies: {
        list: {},
        isMovies: false
    },
    tv: {
        list: {},
        isTV: false
    },
}

export const trendingReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_TRENDING_MOVIES:
            return {
                ...state,
                movies: {
                    list: action.payload,
                    isMovies: true
                }
            }
        
        case FETCH_TRENDING_TV:
            return {
                ...state,
                tv: {
                    list: action.payload,
                    isTV: true
                }
            }

        default:
            return state
    }
}

export const fetchTrandingMovies = (payload) => ({type: FETCH_TRENDING_MOVIES, payload})
export const fetchTrandingTV = (payload) => ({type: FETCH_TRENDING_TV, payload})