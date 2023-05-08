import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import FetchMovieDetails from 'services/FetchMovieDetails';
import { IMAGES_BASE_URL } from '../../constants';
import css from './MovieDetails.module.css';
const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetails = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState('');
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();

  const linkBackRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setStatus(Status.PENDING);
    async function getMovieDetails() {
      try {
        const result = await FetchMovieDetails(movieId);
        setMovie(result);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }
    getMovieDetails();
  }, [movieId]);

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
    const { title, poster_path, overview, genres, release_date, vote_average } =
      movie;
    return (
      <section className={css.movie}>
        <Link to={linkBackRef.current} className={css['movie-link']}>
          Go back
        </Link>
        <div className={css['movie-wrap']}>
          <img src={IMAGES_BASE_URL + poster_path} alt={title} />
          <div className={css['movie-info']}>
            <h2>{title + ' (' + release_date.slice(0, 4) + ')'}</h2>
            <p>
              {'User score: '}
              {Math.floor(vote_average * 10)}
              {'%'}
            </p>
            <h3>Overview:</h3>
            <p>{overview}</p>
            <h3>Genres:</h3>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <p>Additional information</p>
        <Link to="cast">Cast</Link>
        <br></br>
        <Link to="reviews">Reviews</Link>
        <hr />
        <Suspense>
          <Outlet />
        </Suspense>
      </section>
    );
  }
};
export default MovieDetails;
