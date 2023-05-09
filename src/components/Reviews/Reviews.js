import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FetchMovieReviews from 'services/FetchMovieReviews';
import css from './Reviews.module.css';
import Loader from 'components/Loader';

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const Reviews = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState('');
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);
    async function getMovieReview() {
      try {
        const result = await FetchMovieReviews(movieId);
        setReviews(result);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }
    getMovieReview();
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
    const { results, total_results } = reviews;
    if (!total_results) {
      return <div>We don't have any reviews for this movie yet</div>;
    }
    return (
      <div className={css['review-container']}>
        {results.map(review => {
          const { author, content } = review;
          return (
            <div className="review-item" key={author}>
              <h3>
                {'Author: '} {author}
              </h3>
              <p>{content}</p>
            </div>
          );
        })}
      </div>
    );
  }
};
export default Reviews;
