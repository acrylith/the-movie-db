import axios from 'axios';
import { fetchTrandingTV, fetchTrandingTVSuccess, fetchTrandingTVFAiled } from "../reducers/trendingReducer";

export const getTrendingTV = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchTrandingTV())
            const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=d557a3ab1c050ec40d2b6700e34ce8ad&`)
            setTimeout(() => {
                dispatch(fetchTrandingTVSuccess(response.data))
            }, 1000);
        }
        catch (e) {
            dispatch(fetchTrandingTVFAiled)
        }
    }
}