import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar';
import MovieList from 'components/MovieList';
import FetchMovies from 'services/FetchMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;
    async function getMovies() {
      try {
        const fetchResponse = await FetchMovies(query);
        setMovies(prevState => [...prevState, ...fetchResponse.results]);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [query]);

  const formSubmitHandler = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <section className="section">
      <Searchbar onSubmit={formSubmitHandler} />
      <MovieList movies={movies} />
    </section>
  );
};

export default Movies;
