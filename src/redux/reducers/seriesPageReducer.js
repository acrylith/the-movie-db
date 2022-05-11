const FETCH_TV_INFO = "FETCH_TV_INFO";
const FETCH_TV_INFO_SUCCESS = "FETCH_TV_INFO_SUCCESS";
const FETCH_TV_INFO_FAILED = "FETCH_TV_INFO_FAILED";
const FETCH_TV_CREW = "FETCH_TV_CREW";
const FETCH_TV_CREW_SUCCESS = "FETCH_TV_CREW_SUCCESS";
const FETCH_TV_CREW_FAILED = "FETCH_TV_CREW_FAILED";

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

export const seriesPageReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_TV_INFO:
            return {
                ...state,
                info: {
                    data: {},
                    isLoading: true,
                    error: null
                }
            }

        case FETCH_TV_INFO_SUCCESS:
            return {
                ...state,
                info: {
                    data: action.payload,
                    isLoading: false,
                    error: null
                }
            }

        case FETCH_TV_INFO_FAILED:
            return {
                ...state,
                info: {
                    data: {},
                    isLoading: false,
                    error:  "Something went wrong. Open the console"
                }
            }

        case FETCH_TV_CREW:
            return {
                ...state,
                crew: {
                    data: {},
                    isLoading: true,
                    error: null
                }
            }

        case FETCH_TV_CREW_SUCCESS:
            return {
                ...state,
                crew: {
                    data: action.payload,
                    isLoading: false,
                    error: null
                }
            }

        case FETCH_TV_CREW_FAILED:
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

export const fetchTvInfo = () => ({type: FETCH_TV_INFO})
export const fetchTvInfoSuccess = (payload) => ({type: FETCH_TV_INFO_SUCCESS, payload})
export const fetchTvInfoFailed = () => ({type: FETCH_TV_INFO_FAILED})

export const fetchTvCrew = () => ({type: FETCH_TV_CREW})
export const fetchTvCrewSuccess = (payload) => ({type: FETCH_TV_CREW_SUCCESS, payload})
export const fetchTvCrewFailed = () => ({type: FETCH_TV_CREW_FAILED})