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
//https://api.themoviedb.org/3/search/movie?api_key=0f13d416e0a5bec252569942d7aded53&language=en-US&page=1&include_adult=false
