import { Route, Routes } from 'react-router-dom';
import { Home, Movies, Cast, MovieDetails, Reviews } from 'pages';
import { SharedHeader } from 'components';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedHeader />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="movies/:movieId/cast" element={<Cast />} />
          <Route path="movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
