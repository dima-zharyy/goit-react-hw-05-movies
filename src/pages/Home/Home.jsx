import { useState, useEffect } from 'react';
import { getTrending } from 'service';
import { MoviesList } from 'components';
import { Title, Container } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      {movies && <MoviesList movies={movies.results} />}
    </Container>
  );
};
