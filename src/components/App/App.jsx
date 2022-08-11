import { Route, Routes } from 'react-router-dom';
import { SharedHeader } from 'components';
import {
  Home,
  Movies,
  MovieDetails,
  Cast,
  Reviews,
} from 'helpers/lazyImportPages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedHeader />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
