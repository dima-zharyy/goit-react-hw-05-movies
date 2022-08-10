import { Details } from 'components';
import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getDetails } from 'service';
import { Container } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  return (
    <main>
      <Container>
        {movieDetails && <Details movieDetails={movieDetails} />}

        <Outlet />
      </Container>
    </main>
  );
};
