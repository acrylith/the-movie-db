import axios from "axios";
import {
    fetchTvInfo,
    fetchTvInfoSuccess,
    fetchTvInfoFailed,
    fetchTvCrew,
    fetchTvCrewSuccess,
    fetchTvCrewFailed
} from "../reducers/seriesPageReducer";
import { key } from './config'

export const getSeriesInfo = (id) => {
    return async (dispatch) => {
        try {
            dispatch(fetchTvInfo())
            dispatch(fetchTvCrew())
            const infoResponse = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`)
            const crewResponse = await axios.get(`https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=${key}&language=en-US`)
            dispatch(fetchTvInfoSuccess(infoResponse.data))
            dispatch(fetchTvCrewSuccess(crewResponse.data))
        }

        catch (e) {
            dispatch(fetchTvInfoFailed)
            dispatch(fetchTvCrewFailed)
        }
    }
}