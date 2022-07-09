import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { trendingReducer } from "./reducers/trendingReducer";
import { moviePageReducer } from "./reducers/moviePageReducer";
import { seriesPageReducer } from "./reducers/seriesPageReducer"
import { searchResultReducer } from "./reducers/searchResultReducer";
import { discoverPageReducer } from "./reducers/discoverPageReducer";
import { galleryReducer } from "./reducers/galleryReducer";

const rootReducer = combineReducers({
    trending: trendingReducer,
    moviePage: moviePageReducer,
    seriesPage: seriesPageReducer,
    searchResult: searchResultReducer,
    discoverResult: discoverPageReducer,
    gallery: galleryReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store