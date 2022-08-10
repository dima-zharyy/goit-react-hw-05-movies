import { useState, useEffect } from 'react';
import { getTrending } from 'service';
import { MoviesList } from 'components';
import { Container } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  return (
    <main>
      <Container>{movies && <MoviesList movies={movies.results} />}</Container>
    </main>
  );
};
