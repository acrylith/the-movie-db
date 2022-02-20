import { fetchTvInfo } from "../reducers/seriesPageReducer";

export const getSeriesInfo = (id) => {
    return function(dispatch) {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=d557a3ab1c050ec40d2b6700e34ce8ad&language=en-US`)
            .then(response => response.json())
            .then(json => dispatch(fetchTvInfo(json)))
    }
}