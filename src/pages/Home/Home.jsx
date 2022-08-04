import { useState, useEffect } from 'react';
import { getTrending } from 'service';
import { MoviesList } from 'components';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getTrending();

      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  return movies && <MoviesList movies={movies.results} />;
};
