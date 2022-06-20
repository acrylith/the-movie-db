import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import MoviePage from "./pages/MoviePage";
import SeriesPage from "./pages/SeriesPage";
import DiscoverPage from "./pages/DiscoverPage";

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="the-movie-db" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="discover" element={<DiscoverPage />} />
            <Route path="movie">
              <Route path=":movieId" element={<MoviePage />} />
            </Route>
            <Route path="TVseries">
              <Route path=":TVId" element={<SeriesPage />} />
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
