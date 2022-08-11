import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const apiKey = '4f7db32deafa46415b96d8eae8667c0e';

export const getTrending = async () => {
  const response = await axios.get(`/trending/movie/week?api_key=${apiKey}`);
  console.log(response);
  return response.data;
};

export const getMovies = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return response.data.results;
};

export const getDetails = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${apiKey}&language=en-US`
  );
  const data = await response.data;
  const { title, overview, vote_average, genres, poster_path } = data;
  return { title, overview, vote_average, genres, poster_path };
};

export const getCredits = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${apiKey}&language=en-US`
  );

  return response.data.cast;
};

export const getReviews = async id => {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`
  );

  console.log(response);

  return response.data.results;
};
