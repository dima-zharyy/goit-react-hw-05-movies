import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar, MoviesList } from 'components';
import { Container } from './Movies.styled';
import { getMovies } from 'service';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    getMovies(query)
      .then(setMovies)
      .catch(error => console.log(error.message));
  }, [query]);

  const handleSubmit = query => {
    setSearchParams({ query });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Container>
  );
};
