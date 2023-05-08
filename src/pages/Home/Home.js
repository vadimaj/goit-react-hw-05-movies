import MovieList from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import FetchTrendingMovies from 'services/FetchTrendingMovies';

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);

    async function getMovies() {
      try {
        const fetchResponse = await FetchTrendingMovies();
        setMovies(prevState => [...prevState, ...fetchResponse.results]);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }
    getMovies();
  }, []);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }
  if (status === 'rejected') {
    return (
      <>
        <div>An error occured, please try again.</div>
        <div>Error{error.message}</div>
      </>
    );
  }
  if (status === 'resolved') {
    return (
      <section className="section">
        <h3>Trending today</h3>
        <MovieList movies={movies} />
      </section>
    );
  }
};

export default Home;
