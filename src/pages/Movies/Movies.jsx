import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar, MoviesList, LoadButton } from 'components';
import { Container } from './Movies.styled';
import { getMovies } from 'service';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovies(query).then(setMovies);
  }, [query]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  const handleClick = () => {};

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      <LoadButton onClick={handleClick} />
    </Container>
  );
};
