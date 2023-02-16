import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';
import Navigation from './Navigation/Navigation';
import { HeaderMenu } from './Layout.styled';
import LangMenu from './LangMenu/LangMenu';

export default function Layout() {
  return (
    <>
      <HeaderMenu>
        <Navigation />
        <LangMenu/>
      </HeaderMenu>

      <Suspense fallback={<PropagateLoader color="#41d61f" />}>
        <Outlet />
      </Suspense>
    </>
  );
}