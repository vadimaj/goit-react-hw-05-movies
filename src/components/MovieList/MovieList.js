import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MovieList = props => {
  const { movies } = props;

  const location = useLocation();
  return (
    <ul className="movies">
      {movies.map(movie => {
        const { id, title, original_title } = movie;
        return (
          <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
            <li>{title ?? original_title}</li>
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
