import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Home } from '../pages/Home';
import { MyProfile } from '../pages/MyProfile';

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
          <Route path="/myprofile" element={<MyProfile />} />
        </Route>
      </Routes>
    </>
  );
}
