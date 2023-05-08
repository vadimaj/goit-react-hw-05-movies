import { options, BASIC_URL } from '../constants';

const FetchMovieReviews = async movieId => {
  const response = await fetch(
    `${BASIC_URL}/movie/${movieId}/reviews?${options}`
  );
  const data = await response.json();
  return data;
};
export default FetchMovieReviews;
