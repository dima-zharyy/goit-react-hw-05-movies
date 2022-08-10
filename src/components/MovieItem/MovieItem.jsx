import { Movie, Poster, Title, Item } from './MovieItem.styled';

export const MovieItem = ({ id, poster_path, title }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <Item>
      <Movie to={`movies/${id}`}>
        <Poster src={imgUrl} alt={title} loading="lazy" />
        <Title>{title}</Title>
      </Movie>
    </Item>
  );
};
