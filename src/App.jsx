import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from 'pages/SharedLayout';
//import Home from 'pages/Home';
//import Movies from 'pages/Movies';
//import MovieDetails from 'components/MovieDetails';
//import Cast from './components/Cast';
//import Reviews from './components/Reviews';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./components/MovieDetails'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
