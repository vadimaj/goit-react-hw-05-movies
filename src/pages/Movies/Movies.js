import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar';
import MovieList from 'components/MovieList';
import FetchMovies from 'services/FetchMovies';
import Loader from 'components/Loader/Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;
    setStatus(Status.PENDING);
    async function getMovies() {
      try {
        const fetchResponse = await FetchMovies(query);
        setMovies(fetchResponse.results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }
    getMovies();
  }, [query]);

  const formSubmitHandler = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  if (status === 'pending') {
    return <Loader />;
  } else if (status === 'rejected') {
    return (
      <>
        <div>An error occured, please try again.</div>
        <div>Error{error.message}</div>
      </>
    );
  } else {
    return (
      <section className="section">
        <Searchbar onSubmit={formSubmitHandler} />
        <MovieList movies={movies} />
      </section>
    );
  }
};

export default Movies;
