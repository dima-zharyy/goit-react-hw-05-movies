import { MovieItem } from 'components';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        const { id, poster_path, title } = movie;

        return (
          <MovieItem key={id} id={id} poster_path={poster_path} title={title} />
        );
      })}
    </ul>
  );
};
