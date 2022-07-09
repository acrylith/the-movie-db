import axios from "axios"
import { fetchImages, fetchImagesFailed, fetchImagesSuccess } from "../reducers/galleryReducer"
import { key } from "./config"

export const getGallery = (type, id) => {
    return async (dispatch) => {
        try {
            dispatch(fetchImages())
            const galleryResult = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=${key}&include_image_language=en`)
            dispatch(fetchImagesSuccess(galleryResult.data))
        }

        catch (e) {
            dispatch(fetchImagesFailed())
        }
    }
}