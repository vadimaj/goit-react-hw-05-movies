import { options, BASIC_URL } from '../constants';

const FetchMovieCast = async movieId => {
  const response = await fetch(
    `${BASIC_URL}/movie/${movieId}/credits?${options}`
  );
  const data = await response.json();
  return data;
};
export default FetchMovieCast;
