import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixContainer from "./components/NetflixContainer";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <NetflixNavbar />
        <Routes>
          <Route path="/" element={<NetflixContainer />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
