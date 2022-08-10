import { Link, Container, Navigation, Subtitle } from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  return (
    <Container>
      <Subtitle>Additional Information</Subtitle>
      <Navigation>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </Navigation>
    </Container>
  );
};
