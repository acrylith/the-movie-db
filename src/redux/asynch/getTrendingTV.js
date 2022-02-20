import { fetchTrandingTV } from "../reducers/trendingReducer";

export const getTrendingTV = () => {
    return function(dispatch) {
        fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=d557a3ab1c050ec40d2b6700e34ce8ad&`)
            .then(response => response.json())
            .then(json => dispatch(fetchTrandingTV(json)))
    }
}