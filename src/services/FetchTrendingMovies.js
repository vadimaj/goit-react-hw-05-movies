import { options, BASIC_URL } from '../constants';

const FetchTrendingMovies = async () => {
  const response = await fetch(`${BASIC_URL}/trending/movie/day?${options}`);
  const data = await response.json();
  return data;
};
export default FetchTrendingMovies;
