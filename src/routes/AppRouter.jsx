import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Card } from "../Components/Card";
import Navbar from "../Components/Navbar";
import { MoviesPage } from "../pages/MoviesPage";
// import { ActorsPage } from '../pages/ActorsPage';
import { SeriesPage } from "../pages/SeriesPage";
import { TVShowsPage } from "../pages/TVShows";
import MovieDetails from "../pages/MovieDetailsPagr";
import ActorsDetails from "../pages/ActorsDetails";
import TVShowsDetails from "../pages/TVShowsDetails";
import SeriesDetails from "../pages/SeriesDetails";

const ActorsPage = lazy(() => import("../pages/ActorsPage"));

const AppRouter = () => {
  return (
    <Router>
      {/* <Card item={{}}></Card> */}
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<MoviesPage />} />
          <Route path="actors" element={<ActorsPage />} />
          <Route path="tvshows" element={<TVShowsPage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="/series/:id" element={<SeriesDetails />} />
          <Route path="/tvshow/:id" element={<TVShowsDetails />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/actors/:id" element={<ActorsDetails />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
