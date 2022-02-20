const FETCH_TV_INFO = "FETCH_TV_INFO";
const FETCH_TVDB_INFO = "FETCH_TVDB_INFO";

const defaultState = {
    info: {},
    tvdb: {}
}

export const seriesPageReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_TV_INFO:
            return {
                ...state,
                info: action.payload
            }
        
        case FETCH_TVDB_INFO:
            return {
                ...state,
                tvdb: action.payload
            }

        default:
            return state
    }
}

export const fetchTvInfo = (payload) => ({type: FETCH_TV_INFO, payload})
export const fetchTvdbInfo = (payload) => ({type: FETCH_TVDB_INFO, payload})