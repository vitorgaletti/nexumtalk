import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Home } from '../pages/Home';
import { SignUp } from '../pages/SignUp';
import { User } from '../pages/User';

function ScrollToTop() {
  const routePath = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [routePath]);
  return null;
}

export function Router() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:nickname" element={<User />} />
          <Route path="/:nickname/about" element={<User />} />
          <Route path="/:nickname/information" element={<User />} />
          <Route path="/:nickname/photos" element={<User />} />
          <Route path="/:nickname/friends" element={<User />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}
