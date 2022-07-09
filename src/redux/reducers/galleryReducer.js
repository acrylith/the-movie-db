const FETCH_IMAGES = "FETCH_IMAGES"
const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS"
const FETCH_IMAGES_FAILED = "FETCH_IMAGES_FAILED"

const defaultState = {
    data: {},
    isLoading: false,
    error: null
}

export const galleryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_IMAGES:
            return {
                ...state,
                data: {},
                isLoading: true,
                error: null
            }
        
        case FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: null
            }

        case FETCH_IMAGES_FAILED:
            return {
                ...state,
                data: {},
                isLoading: false,
                error: "Something went wrong. Please, open console"
            }

        default: return state
    }
}

export const fetchImages = () => ({type: FETCH_IMAGES})
export const fetchImagesSuccess = (payload) => ({type: FETCH_IMAGES_SUCCESS, payload})
export const fetchImagesFailed = () => ({type: FETCH_IMAGES_FAILED})