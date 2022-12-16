import { useLocation, useParams } from 'react-router-dom';

export function useHasSubPages() {
  const { nickname } = useParams();

  const { pathname } = useLocation();

  function hasSubPagesHome(): boolean {
    const hasSubPagesHome = pathname.includes(`/${nickname}`);
    return hasSubPagesHome;
  }

  function hasSubPagesMyProfile(): boolean {
    const allowSubPagesMyProfile =
      pathname.includes(`/${nickname}`) ||
      pathname.includes(`${nickname}/about`) ||
      pathname.includes(`${nickname}/information`);

    const deniedPagesMyProfile =
      pathname.includes(`/${nickname}/photos`) ||
      pathname.includes(`/${nickname}/friends`);

    return allowSubPagesMyProfile && !deniedPagesMyProfile;
  }
  return {
    hasSubPagesHome,
    hasSubPagesMyProfile
  };
}
