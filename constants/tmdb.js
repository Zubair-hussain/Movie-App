export const API_KEY = '36abd0f1b502d24bfea71b033d4e12a4';
export const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  const json = await res.json();
  return json.results;
};
