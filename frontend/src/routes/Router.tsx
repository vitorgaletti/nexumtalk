import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Home } from '../pages/Home';
import { MyProfile } from '../pages/MyProfile';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Route>
    </Routes>
  );
}
