import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FetchMovieCast from 'services/FetchMovieCast';
import { IMAGES_BASE_URL } from '../../constants';
import css from './Cast.module.css';
import Loader from 'components/Loader';
import castplaceholder from 'components/images/castplaceholder.jpg';

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const Cast = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState('');
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);
    async function getMovieCredits() {
      try {
        const result = await FetchMovieCast(movieId);
        setCast(result.cast);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }
    getMovieCredits();
  }, [movieId]);

  if (status === 'pending') {
    return <Loader />;
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
      <div className={css['cast-container']}>
        {cast.map(actor => {
          const { name, profile_path, character, id } = actor;
          return (
            <div key={id}>
              <img
                src={
                  profile_path
                    ? IMAGES_BASE_URL + profile_path
                    : castplaceholder
                }
                alt={name}
                className={css['cast-image']}
              />
              <h3>{name}</h3>
              <h3>Character:</h3>
              <p>{character}</p>
            </div>
          );
        })}
      </div>
    );
  }
};
export default Cast;
