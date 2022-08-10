import {
  Wrapper,
  Container,
  Poster,
  Title,
  Text,
  Subtitle,
} from './Details.styled';

import { GenresList, AdditionalInfo } from 'components';

export const Details = ({ movieDetails }) => {
  console.log(movieDetails);
  const { title, overview, vote_average, genres, poster_path } = movieDetails;

  const imgPlaceholder = `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`;
  const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const userScore = Math.round((vote_average / 10) * 100);

  return (
    <Container>
      <Poster src={poster_path ? `${imgUrl}` : `${imgPlaceholder}`} alt="" />
      <Wrapper>
        <Title>{title}</Title>
        <Text>{`User score: ${userScore}%`}</Text>
        <Subtitle>Overview</Subtitle>
        <Text>{overview ? overview : `Sorry! There is no overview`}</Text>
        <Subtitle>Genres</Subtitle>
        <GenresList genres={genres} />
        <AdditionalInfo />
      </Wrapper>
    </Container>
  );
};
