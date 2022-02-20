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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:movieId" element={<MoviePage />} />
          <Route path="/TVseries/:TVId" element={<SeriesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
