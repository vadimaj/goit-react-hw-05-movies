import { BASIC_URL, KEY } from '../constants';

const FetchMovies = async searchQuery => {
  const options = new URLSearchParams({
    api_key: KEY,
    query: searchQuery,
  });

  const response = await fetch(`${BASIC_URL}/search/movie?${options}`);
  const data = await response.json();

  return data;
};
export default FetchMovies;
