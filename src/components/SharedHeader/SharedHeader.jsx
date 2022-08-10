import { Outlet } from 'react-router-dom';
import { Global } from '@emotion/react';
import { globalStyle } from 'components';
import { Menu, Link, Navigation } from './SharedHeader.styled';

export const SharedHeader = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Menu>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
      </Menu>
      <Outlet />
    </>
  );
};
