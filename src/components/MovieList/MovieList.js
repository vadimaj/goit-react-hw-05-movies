import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MovieList = props => {
  const { movies } = props;
  console.log(movies);
  const location = useLocation();
  return (
    <ul className="movies">
      {movies.map(movie => {
        return (
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            key={movie.id}
          >
            <li>{movie.title}</li>
          </Link>
        );
      })}
    </ul>
  );
};
export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
