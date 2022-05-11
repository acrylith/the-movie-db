import axios from "axios";
import {
    fetchTvInfo,
    fetchTvInfoSuccess,
    fetchTvInfoFailed,
    fetchTvCrew,
    fetchTvCrewSuccess,
    fetchTvCrewFailed
} from "../reducers/seriesPageReducer";

export const getSeriesInfo = (id) => {
    return async (dispatch) => {
        try {
            dispatch(fetchTvInfo())
            dispatch(fetchTvCrew())
            const infoResponse = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US`)
            const crewResponse = await axios.get(`https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US`)
            
            setTimeout(() => {
                dispatch(fetchTvInfoSuccess(infoResponse.data))
                dispatch(fetchTvCrewSuccess(crewResponse.data))
            }, 1000);
        }

        catch (e) {
            dispatch(fetchTvInfoFailed)
            dispatch(fetchTvCrewFailed)
        }
    }
}