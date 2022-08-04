import { NavLink } from 'react-router-dom';

export const MovieItem = ({ id, poster_path, title }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <li>
      <NavLink to={`movies/${id}`}>
        <img src={imgUrl} alt={title} loading="lazy" />
        <p>{title}</p>
      </NavLink>
    </li>
  );
};
