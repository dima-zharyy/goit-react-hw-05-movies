import { useState, useEffect } from 'react';
import { getTrending } from 'service';
import { MoviesList } from 'components';
import { Title } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      {movies && <MoviesList movies={movies.results} />}
    </main>
  );
};
