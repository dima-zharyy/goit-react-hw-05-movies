import { MovieItem } from 'components';
import { List } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => {
        const { id, poster_path, title } = movie;

        return (
          <MovieItem key={id} id={id} poster_path={poster_path} title={title} />
        );
      })}
    </List>
  );
};
