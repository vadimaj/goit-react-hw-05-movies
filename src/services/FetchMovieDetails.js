import { options, BASIC_URL } from '../constants';

const FetchMovieDetails = async movieId => {
  const response = await fetch(`${BASIC_URL}/movie/${movieId}?${options}`);
  const data = await response.json();

  return data;
};
export default FetchMovieDetails;
