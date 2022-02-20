import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import MoviePage from "./pages/MoviePage";
import SeriesPage from "./pages/SeriesPage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/the-movie-db" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/the-movie-db/search" element={<SearchPage />} />
          <Route path="/the-movie-db/movie/:movieId" element={<MoviePage />} />
          <Route path="/the-movie-db/TVseries/:TVId" element={<SeriesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
